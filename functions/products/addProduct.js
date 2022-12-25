const functions = require("firebase-functions");
const admin = require("firebase-admin");

//id
//sku
//name
//cost
//category
//subCategory
//shortDescription
//image

const addProduct = functions.https.onRequest(async (req, res) => {
  if (!req.method === "POST") {
    res.status(404).send("Route not found");
    return;
  }
  if (!req.body.name) {
    res.status(200).json({ status: "false", message: "name is required" });
    return;
  }
  if (!req.body.cost) {
    res.status(200).json({ status: "false", message: "cost is required" });
    return;
  }
  if (!req.body.category) {
    res.status(200).json({ status: "false", message: "category is required" });
    return;
  }

  if (!req.body.shortDescription) {
    res
      .status(200)
      .json({ status: "false", message: "shortDescription is required" });
    return;
  }

  try {
    const writeResult = await admin
      .firestore()
      .collection("products")
      .add({
        name: req.body.name,
        cost: req.body.cost,
        category: req.body.category,
        subCategory: req.body.subCategory ?? "",
        image: req.body.image ?? "",
        shortDescription: req.body.shortDescription ?? "",
      });

    res.json({ status: true, id: writeResult.id });
  } catch (err) {
    res.json({ status: false, error: err });
  }
});

module.exports = addProduct;
