const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const getAllCategories = functions.https.onRequest((req, res) => {
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

      //snapshot
      const snapshot = await categoriesRef.get();

      if (snapshot.empty) {
        res.status(200).json({ status: false, data: [] });
        return;
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json({ status: true, data: docs });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });
});

module.exports = getAllCategories;
