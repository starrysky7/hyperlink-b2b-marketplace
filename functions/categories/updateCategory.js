const functions = require("firebase-functions");
const admin = require("firebase-admin");

const updateCategory = functions.https.onRequest(async (req, res) => {
  if (req.method === "PATCH") {
    try {
      const categoryRef = admin
        .firestore()
        .collection("categories")
        .doc(req.body.id);

      const doc = await categoryRef.get();

      if (!doc.exists) {
        res.json({ status: false, message: "Category not found" });
      } else {
        const updateResult = await categoryRef.update({
          name: req.body.name,
        });
        res.json({ status: true, data: updateResult });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
});

module.exports = updateCategory;
