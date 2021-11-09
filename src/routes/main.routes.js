const { Router } = require('express')
const express = require ('express')
const router = express.Router()
const controller = require("../controllers/mainController")

router.get("/",controller.home)
router.get("/login",controller.login)
router.get("/register",controller.register)
router.get("/product_details",controller.product_details)
router.get("/shopping_cart",controller.shopping_cart)
router.get("/edition_product",controller.edition_product)

module.exports = router
