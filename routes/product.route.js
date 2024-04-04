const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//Retornar uma lista de productos
router.get("/", getProducts);

//Retorna um produto pelo id
router.get("/:id", getProduct);

// Cria um novo produto
router.post("/", createProduct);

// Atualizar um produto
router.put("/:id", updateProduct);
// Deletar um produto
router.delete("/:id", deleteProduct);

module.exports = router;
