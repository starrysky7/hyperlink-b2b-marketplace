const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const deleteCategory = functions.https.onRequest(async (req, res) => {
  //cors
  cors(req, res, async () => {
    //validate request methid
    if (!req.method === "DELETE") {
      res.status(404);
      return;
    }

    try {
      //delete document from collection
      const deleteResult = await admin
        .firestore()
        .collection("categories")
        .doc(req.query.id)
        .delete();

      res.json({ status: true, data: deleteResult });
    } catch (err) {
      res.json({ status: false, error: err });
    }
  });
});

module.exports = deleteCategory;
