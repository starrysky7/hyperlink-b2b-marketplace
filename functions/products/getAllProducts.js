const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const getAllProducts = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method === "GET") {
      try {
        const productsRef = admin.firestore().collection("products");
        const snapshot = await productsRef.get();

        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });

        if (!docs.length > 0) {
          res.json({ status: false, message: "0 products found" });
        } else res.json({ status: true, data: docs });
      } catch (err) {
        res.status(500).json({ error: err });
      }
    }
  });
});

module.exports = getAllProducts;
