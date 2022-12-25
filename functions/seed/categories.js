const axios = require("axios");

//avoid duplicates in seed data
let sampleData = [
  {
    name: "Eggs & Dairy",
    subCategories: [
      "Milk",
      "Fermented/ Renneted Milk",
      "Condensed Milk",
      "Cream",
      "Cheese",
    ],
  },
  {
    name: "Grains, Oils & Flours",
    subCategories: [
      "Fats & Oils",
      "Emulsions",
      "Grains",
      "Cereals",
      "Legumes",
      "Flours",
      "Breakfast Cereals & Oats",
      "Pastas & Noodles",
      "Processed Grains, Cereals & Legumes",
      "Soybean",
      "Vinegars",
    ],
  },
  {
    name: "Fruits & Vegetables",
    subCategories: ["Fruits", "Vegetables"],
  },
  {
    name: "Meat, Poultry & Fish",
    subCategories: [
      "Fresh",
      "Frozen",
      "Chilled",
      "Ground",
      "Poultry",
      "Processed Meat",
      "Fresh fish",
    ],
  },
  {
    name: "Herbs & Spices",
    subCategories: [
      "Salt and salt substitutes",
      "Herbs",
      "Spices",
      "Seasonings",
      "Condiments",
    ],
  },
  {
    name: "Bakery",
    subCategories: [],
  },
  {
    name: "Beverages",
    subCategories: [],
  },
  {
    name: "Confectionery",
    subCategories: [],
  },
];

//step1 add categories
sampleData.forEach(async (category) => {
  axios
    .post(
      "http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-addCategory",
      {
        name: category.name,
      }
    )
    .then((res) => {
      console.log(`Added category ${res.data.id}`);

      category.subCategories.forEach((subCategory) => {
        axios
          .post(
            "http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-addCategory",
            {
              name: subCategory,
              parent: res.data.id,
            }
          )
          .then((res) => {
            console.log(`Added category ${res.data.id}`);
          })
          .catch((err) => {
            console.log({ error: err });
          });
      });
    })
    .catch((err) => {
      console.log({ error: err });
    });
});

//step3 link categories and subcategories

// axios
//   .get(
//     "http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getAllCategories"
//   )
//   .then((res) => {
//     const categories = res.data.data;
//     axios
//       .get(
//         "http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getAllSubCategories"
//       )
//       .then((res) => {
//         const subCategories = res.data.data;

//         sampleData.forEach((category) => {
//           category.subCategories.forEach((subCategory) => {
//             axios
//               .post(
//                 "http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-linkSubCategory",
//                 {
//                   subCategoryId: subCategories.filter(
//                     (item) => item.name === subCategory
//                   )[0].id,
//                   categoryId: categories.filter(
//                     (item) => item.name === category.name
//                   )[0].id,
//                 }
//               )
//               .then((res) => {
//                 console.log(
//                   `linked category:${category} subCategory:${subCategory} `
//                 );
//               })
//               .then((err) => {
//                 console.log({ error: err });
//               });
//           });
//         });
//       });
//   })
//   .catch((err) => {
//     console.log({ error: err });
//   });
