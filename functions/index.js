const admin = require("firebase-admin");
const productService = require("./products");
const categoryService = require("./categories");
const userService = require("./users");
//initialize firebase app
admin.initializeApp();

exports.product = productService;
exports.category = categoryService;
exports.user = userService;
