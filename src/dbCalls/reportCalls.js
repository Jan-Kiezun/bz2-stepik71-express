const { products } = require("../models/products");

exports.getReport = async () => {
  const productsAmount = await products.aggregate([
    {
      $project: {
        name: 1,
        amount: 1,
        unit_of_measurement: 1,
      },
    },
  ]);
  const productsTotalPrice = await products.aggregate([
    {
      $project: {
        name: 1,
        total_price: { $multiply: ["$price", "$amount"] },
      },
    },
  ]);
  return { productsAmount, productsTotalPrice };
};
