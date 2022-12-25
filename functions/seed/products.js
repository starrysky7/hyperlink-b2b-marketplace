const axios = require("axios");

const productData = [
  {
    name: "Brown eggs",
    shortDescription: "Raw organic brown eggs in a basket",
    cost: 28.1,
  },
  {
    name: "Sweet fresh stawberry",
    shortDescription: "Sweet fresh stawberry on the wooden table",
    cost: 29.45,
  },
  {
    name: "Asparagus",
    shortDescription: "Asparagus with ham on the wooden table",
    cost: 18.95,
  },
  {
    name: "Green smoothie",
    shortDescription:
      "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    cost: 17.68,
  },
  {
    name: "Raw legums",
    shortDescription: "Raw legums on the wooden table",
    cost: 17.11,
  },
  {
    name: "Baking cake",
    shortDescription:
      "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    cost: 11.1,
  },
  {
    name: "Pesto with basil",
    shortDescription: "Italian traditional pesto with basil, chesse and oil",
    cost: 18.19,
  },
  {
    name: "Hazelnut in black ceramic bowl",
    shortDescription:
      "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    cost: 27.35,
  },
  {
    name: "Fresh stawberry",
    shortDescription: "Sweet fresh stawberry on the wooden table",
    cost: 28.59,
  },
  {
    name: "Lemon and salt",
    shortDescription: "Rosemary, lemon and salt on the table",
    cost: 15.79,
  },
  {
    name: "Homemade bread",
    shortDescription: "Homemade bread",
    cost: 17.48,
  },
  {
    name: "Legums",
    shortDescription: "Cooked legums on the wooden table",
    cost: 14.77,
  },
  {
    name: "Fresh tomato",
    shortDescription: "Fresh tomato juice with basil",
    cost: 16.3,
  },
  {
    name: "Healthy breakfast",
    shortDescription:
      "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    cost: 13.02,
  },
  {
    name: "Green beans",
    shortDescription: "Raw organic green beans ready to eat",
    cost: 28.79,
  },
  {
    name: "Baked stuffed portabello mushrooms",
    shortDescription:
      "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    cost: 20.31,
  },
  {
    name: "Strawberry jelly",
    shortDescription: "Homemade organic strawberry jelly in a jar",
    cost: 14.18,
  },
  {
    name: "Pears juice",
    shortDescription: "Fresh pears juice on the wooden table",
    cost: 19.49,
  },
  {
    name: "Fresh pears",
    shortDescription: "Sweet fresh pears on the wooden table",
    cost: 15.12,
  },
  {
    name: "Caprese salad",
    shortDescription:
      "Homemade healthy caprese salad with tomato mozzarella and basil",
    cost: 16.76,
  },
  {
    name: "Oranges",
    shortDescription:
      "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    cost: 21.48,
  },
  {
    name: "Vegan food",
    shortDescription: "Concept of vegan food",
    cost: 29.66,
  },
  {
    name: "Breakfast with muesli",
    shortDescription: "Concept of healthy breakfast with muesli",
    cost: 22.7,
  },
  {
    name: "Honey",
    shortDescription: "Honey and honeycell on the table",
    cost: 17.01,
  },
  {
    name: "Breakfast with cottage",
    shortDescription: "Healthy breakfast with cottage cheese and strawberry",
    cost: 14.05,
  },
  {
    name: "Strawberry smoothie",
    shortDescription:
      "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    cost: 28.86,
  },
  {
    name: "Strawberry and mint",
    shortDescription: "Homemade muesli with strawberry and mint",
    cost: 26.21,
  },
  {
    name: "Ricotta",
    shortDescription: "Ricotta with berry and mint",
    cost: 27.81,
  },
  {
    name: "Cuban sandwiche",
    shortDescription:
      "Homemade traditional cuban sandwiches with ham pork and cheese",
    cost: 18.5,
  },
  {
    name: "Granola",
    shortDescription:
      "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    cost: 29.97,
  },
  {
    name: "Smoothie with chia seeds",
    shortDescription:
      "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    cost: 25.26,
  },
  {
    name: "Yogurt",
    shortDescription: "Homemade yogurt with raspberry and mint",
    cost: 27.61,
  },
  {
    name: "Sandwich with salad",
    shortDescription: "Vegan sandwich with salad, tomato and radish",
    cost: 22.48,
  },
  {
    name: "Cherry",
    shortDescription: "Cherry with sugar on old table",
    cost: 14.35,
  },
  {
    name: "Raw asparagus",
    shortDescription: "Raw fresh asparagus salad with cheese and dressing",
    cost: 22.97,
  },
  {
    name: "Corn",
    shortDescription: "Grilled corn on the cob with salt and butter",
    cost: 13.55,
  },
  {
    name: "Vegan",
    shortDescription: "Concept of healthy vegan eating",
    cost: 28.96,
  },
  {
    name: "Fresh blueberries",
    shortDescription:
      "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    cost: 21.01,
  },
  {
    name: "Smashed avocado",
    shortDescription:
      "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    cost: 25.88,
  },
  {
    name: "Italian ciabatta",
    shortDescription:
      "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    cost: 15.18,
  },
  {
    name: "Rustic breakfast",
    shortDescription:
      "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    cost: 21.32,
  },
  {
    name: "Sliced lemons",
    shortDescription:
      "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    cost: 27.14,
  },
  {
    name: "Plums",
    shortDescription: "Yellow and red sweet plums",
    cost: 19.18,
  },
  {
    name: "French fries",
    shortDescription: "Homemade oven baked french fries with ketchup",
    cost: 18.32,
  },
  {
    name: "Strawberries",
    shortDescription:
      "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    cost: 15.13,
  },
  {
    name: "Ground beef meat burger",
    shortDescription:
      "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    cost: 11.73,
  },
  {
    name: "Tomatoes",
    shortDescription: "Organic tomatoes made with love",
    cost: 26.03,
  },
  {
    name: "Basil",
    shortDescription: "Concept of vegan food with basil",
    cost: 15.19,
  },
  {
    name: "Fruits bouquet",
    shortDescription: "Abstract citrus fruits bouquet on blue background",
    cost: 18.18,
  },
  {
    name: "Peaches on branch",
    shortDescription:
      "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    cost: 25.62,
  },
];

productData.forEach(async (product) => {
  //get categories
  const categories = await axios.get(
    `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getAllCategories`
  );
  //select a category
  const selectedCategory =
    categories.data.data[
      Math.floor(Math.random() * categories.data.data.length)
    ];

  const res = await axios.post(
    `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/product-addProduct`,
    {
      name: product.name,
      shortDescription: product.shortDescription,
      cost: product.cost,
      category: selectedCategory.id,
    }
  );

  if (res.data.status) console.log(`Product ${res.data.id} added`);
  else console.log("failed");
});
