const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const AuthUtil = require("../util/Auth");

router.post("/product", productController.createProduct);
// router.get(
//   "/product",
//   AuthUtil.validateRequest("123456"), //1st filter , 2ndwith parameters 3rd
//   productController.getAllProducts
// );
router.get(
  "/product",
  productController.getAllProducts
);
router.get("/product/:id", productController.getproductById);
router.post("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
