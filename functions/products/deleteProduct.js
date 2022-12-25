const functions = require("firebase-functions");
const admin = require("firebase-admin");

const deleteProduct = functions.https.onRequest(async (req, res) => {
  if (!req.method === "DELETE") {
    res.status(404);
    return;
  }

  if (!req.query.id) {
    res.status(200).json({ status: false, message: "id is required" });
  }

  try {
    const deleteResult = await admin
      .firestore()
      .collection("products")
      .doc(req.query.id)
      .delete();

    res.json({ status: true, data: deleteResult });
  } catch (err) {
    res.json({ status: false, error: err });
  }
});

module.exports = deleteProduct;
