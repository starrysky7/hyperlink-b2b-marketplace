import { createContext, useContext, useReducer } from "react";
import useFirebase from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";

const { auth } = useFirebase();

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const initialState = {
    uid: "",
    accessToken: "",
  };

  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, { ...initialState });

  function reducer(state, action) {
    switch (action.type) {
      case "createUser":
        createUserWithEmailAndPassword(
          auth,
          action.payload.emailAddress,
          action.payload.password
        )
          .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            const res = await axios.post(
              `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/user-addUser`,
              {
                id: user.uid,
                name: "test",
                emailAddress: "test@test.com",
                businessName: "test",
                licenseType: "test",
                licenseNumber: "test",
                addressLine1: "test",
                addressLine2: "test",
                city: "test",
                state: "test",
                postCode: "test",
              }
            );

            if (res.data.status) {
              router.push("/browse");
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        break;

      case "login":
        signInWithEmailAndPassword(
          auth,
          action.payload.emailAddress,
          action.payload.password
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            router.push("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
        break;
      case "logout":
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            router.push("/account/login");
          })
          .catch((error) => {
            // An error happened.
          });
        break;
      default:
        return state;
    }
  }

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}
