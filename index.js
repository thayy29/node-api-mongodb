const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

// Conexao do banco com o Node e inicializacao do servidor
mongoose
  .connect(
    "mongodb+srv://thaycs:yYAbo9zKDXeKnrUJ@backend.xjbfjgs.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
