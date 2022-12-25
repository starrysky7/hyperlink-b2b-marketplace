const functions = require("firebase-functions");
const admin = require("firebase-admin");

const updateProduct = functions.https.onRequest(async (req, res) => {
  if (!req.method === "POST") {
    res.status(404).send("Route not found");
    return;
  } else {
    try {
      const productRef = admin
        .firestore()
        .collection("products")
        .doc(req.body.id);

      const doc = await productRef.get();

      if (!doc.exists) {
        res.json({ status: false, message: "Product not found" });
      } else {
        const updateResult = await productRef.update({
          name: req.body.name ?? doc.data().name,
          cost: req.body.cost ?? doc.data().cost,
          category: req.body.category ?? doc.data().category,
          subCategory: req.body.subCategory ?? doc.data().subCategory,
          image: req.body.image ?? doc.data().image,
        });
        res.json({ status: true, data: updateResult });
      }
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
});

module.exports = updateProduct;
