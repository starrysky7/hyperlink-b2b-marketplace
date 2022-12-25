const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const addCategory = functions.https.onRequest(async (req, res) => {
  //cors
  cors(req, res, async () => {
    //validate request method
    if (!req.method === "POST") {
      res.status(404).send("Route not found");
      return;
    }
    //validate name - shouldnt be empty
    if (!req.body.name) {
      res.status(200).json({ status: "false", message: "name is required" });
      return;
    }

    try {
      //add document to collection
      const writeResult = await admin
        .firestore()
        .collection("categories")
        .add({
          name: req.body.name,
          parent: req.body.parent ?? "",
        });

      //response
      res.json({ status: true, id: writeResult.id });
    } catch (err) {
      res.json({ status: false, error: err });
    }
  });
});

module.exports = addCategory;
