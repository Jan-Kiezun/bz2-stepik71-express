const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../dbCalls/productsCalls");

router.get("/", async (req, res) => {
  const { name, price, amount } = req.query;
  const products = await getProducts(name, price, amount);
  res.send(products);
});

router.post("/", async (req, res) => {
  const { name, price, amount, unit_of_measurement, description } = req.body;
  const product = await addProduct(
    name,
    price,
    amount,
    unit_of_measurement,
    description
  );
  res.send(product);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, amount, unit_of_measurement, description } = req.body;
  const product = await updateProduct(
    id,
    name,
    price,
    amount,
    unit_of_measurement,
    description
  );
  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await deleteProduct(id);
  res.send(product);
});
