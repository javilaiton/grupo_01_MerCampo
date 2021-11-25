const { Router } = require('express')
const express = require ('express')
const router = express.Router()
const controller = require("../controllers/mainController")
const productsController = require("../controllers/productController")
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'product-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

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
/* EDIT ONE PRODUCT */ 
router.get('/productos/edit/:id', productsController.edit); 
router.put('/productos/edit/:id', upload.single('image') ,productsController.update); 

/* DELETE ONE PRODUCT***/ 
router.delete('/productos/delete/:id', productsController.delete);

module.exports = router
