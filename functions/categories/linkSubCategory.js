const functions = require("firebase-functions");
const admin = require("firebase-admin");

const linkSubCategory = functions.https.onRequest(async (req, res) => {
  if (!req.method === "POST") {
    res.status(404).send("Route not found");
    return;
  }

  if (!req.body.categoryId) {
    res
      .status(400)
      .json({ status: "false", message: "categoryId is required" });
    return;
  }
  if (!req.body.subCategoryId) {
    res
      .status(400)
      .json({ status: "false", message: "subCategoryId is required" });
    return;
  }

  try {
    const subCategoryRef = admin
      .firestore()
      .collection("subCategories")
      .doc(req.body.subCategoryId);

    const doc = await subCategoryRef.get();

    if (!doc.exists) {
      res.json({ status: false, message: "Category not found" });
    } else {
      const updateResult = await subCategoryRef.update({
        parent: req.body.categoryId,
      });
      res.json({ status: true, data: updateResult });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = linkSubCategory;
