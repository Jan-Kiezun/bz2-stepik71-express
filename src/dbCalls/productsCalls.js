const { products } = require("../models/products");
exports.getProducts = async (name, price, amount) => {
  const query = {};
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  if (price) {
    query.price = price;
  }
  if (amount) {
    query.amount = amount;
  }
  return await products.find(query);
};
exports.addProduct = async (
  name,
  price,
  amount,
  unit_of_measurement,
  description = ""
) => {
  const product = new products({
    name,
    price,
    description,
    amount,
    unit_of_measurement,
  });
  return await product.save();
};

exports.updateProduct = async (
  id,
  name,
  price,
  description,
  amount,
  unit_of_measurement
) =>
  await products.updateOne(
    { _id: id },
    {
      $set: {
        name,
        price,
        description,
        amount,
        unit_of_measurement,
      },
    }
  );

exports.deleteProduct = async (id) => await products.deleteOne({ _id: id });
