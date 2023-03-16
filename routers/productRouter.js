const express = require("express");
const { productController } = require("../controllers/index");
const router = express.Router();

router.get("/", productController.fetchProducts);
router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
