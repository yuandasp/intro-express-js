const express = require("express");
const { cartController } = require("../controllers/index");
const router = express.Router();

router.get("/", cartController.fetchProducts);
router.post("/", cartController.addCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
