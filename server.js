const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const data = require("./src/data/sampleData.json");
const { products } = require("./src/model/products");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await products.collection.drop();
    await products.insertMany(data);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.use("/products", require("./src/routes/productsRoutes"));

main();
