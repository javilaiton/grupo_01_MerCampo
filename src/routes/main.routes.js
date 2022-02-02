const { Router } = require('express')
const express = require('express')
const router = express.Router()
const controller = require("../controllers/mainController")
const path = require('path');
//const loggedMiddleware= require("../middlewares/loggedMiddleware")
const validaciones=require("../middlewares/validacionesURL")
//Requiero el paquete expres-validator
const { body } = require('express-validator')


router.get("/", controller.home)
router.get("/product_details", controller.product_details)
router.get("/shopping_cart", validaciones,controller.shopping_cart)
router.get("/error",controller.getError)



module.exports = router
