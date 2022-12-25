const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

const addUser = functions.https.onRequest((req, res) => {
  console.log(req.body);

  //cors
  cors(req, res, async () => {
    //validate request method
    if (!req.method === "POST") {
      res.status(404).send("Route not found");
      return;
    }

    // //validate name - shouldnt be empty
    // if (!req.body.name) {
    //   res.status(200).json({ status: "false", message: "name is required" });
    //   return;
    // }

    try {
      //add document to collection
      const writeResult = await admin
        .firestore()
        .collection("users")
        .doc(req.body.id)
        .set({
          name: req.body.name,
          emailAddress: req.body.emailAddress,
          businessName: req.body.businessName,
          licenseType: req.body.licenseType,
          licenseNumber: req.body.licenseNumber,
          addressLine1: req.body.addressLine1,
          addressLine2: req.body.addressLine2,
          city: req.body.city,
          state: req.body.state,
          postCode: req.body.postCode,
        });

      //response
      res.json({ status: true, id: writeResult.id });
    } catch (err) {
      res.json({ status: false, error: err });
    }
  });
});

module.exports = addUser;
