const { Router } = require('express')
const express = require ('express')
const router = express.Router()
const controller = require("../controllers/mainController")

router.get("/",controller.home)
router.get("/login",controller.login)
router.get("/register",controller.register)
router.get("/product_details",controller.product_details)
router.get("/product_add",controller.product_add)
router.get("/shopping_cart",controller.shopping_cart)
router.get("/edition_product",controller.edition_product)
router.get("/adm_products",controller.adm_products)

/* GET ALL PRODUCTS */ 
router.get("/productos",productsController.list)
/* CREATE ONE PRODUCT */ 
router.get('/productos/create', productsController.create); 
router.post('/productos/create',upload.single('image') ,productsController.save); 
/* GET ONE PRODUCT */ 
router.get('/productos/detail/:id', productsController.details);

module.exports = router
