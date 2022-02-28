const express = require ('express')
const router = express.Router()
const productApiController = require("../../controllers/api/productApi")

router.get("/products",  productApiController.listProduct)
router.get("/products/:id",  productApiController.getOneProduct)


module.exports = router