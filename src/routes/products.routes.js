const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')
const validaciones =require("../middlewares/validacionesURL")
const productsController = require("../controllers/productController")
const validationsProduct= require('../middlewares/validationsProduct');
const validationsProductMod= require('../middlewares/validationsProductMod');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
      cb(null, 'product-' + Date.now() + path.extname(file.originalname))
    }
  })
  const upload = multer({ storage })

router.get("/adm_products", validaciones,productsController.adm_products)
router.get("/product_add", validaciones ,productsController.product_add)
router.get("/edition_product", validaciones,productsController.edition_product)

  /* GET ALL PRODUCTS */
router.get("/productos", validaciones ,productsController.list)
/* CREATE ONE PRODUCT */
router.get('/productos/create', validaciones ,productsController.create);
router.post('/productos/create', upload.single('image'),validationsProduct, productsController.save);
/* GET ONE PRODUCT */
router.get('/productos/detail/:id', productsController.details);
/* EDIT ONE PRODUCT */
router.get('/productos/edit/:id', validaciones , productsController.edit);
router.put('/productos/edit/:id', upload.single('image'),validationsProductMod, productsController.update);

/* DELETE ONE PRODUCT***/
router.delete('/productos/delete/:id', productsController.delete);


module.exports = router;