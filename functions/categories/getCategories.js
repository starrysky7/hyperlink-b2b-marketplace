const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const getCategories = functions.https.onRequest((req, res) => {
  //cors
  cors(req, res, async () => {
    //validate request method
    if (!req.method === "GET") {
      res.status(404);
      return;
    }

    try {
      //collection ref
      const categoriesRef = admin.firestore().collection("categories");

      //query
      const queryRef = categoriesRef.where(
        "parent",
        "==",
        req.query.parent ?? ""
      );

      //query snapshot
      const querySnapshot = await queryRef.get();

      if (querySnapshot.empty) {
        res.status(200).json({ status: false, data: [] });
        return;
      } else {
        let docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({ status: true, data: docs });
      }

      // if (!docs.length > 0) {
      //   res.json({ status: false, message: "0 categories found" });
      // } else res.json({ status: true, data: docs });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });
});

module.exports = getCategories;
