import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import firebaseCredentials from "./firebaseCredentials";

export default function useFirebase() {
  const app = initializeApp(firebaseCredentials);

  //firebase auth obj
  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");

  return { app, auth };
}
