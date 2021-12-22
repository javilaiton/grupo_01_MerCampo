const { Router } = require('express')
const express = require('express')
const router = express.Router()
const controller = require("../controllers/mainController")
const productsController = require("../controllers/productController")
const controllersUser = require("../controllers/usersController")
const path = require('path');
const multer = require('multer');
const loggedMiddleware= require("../middlewares/loggedMiddleware")
const validaciones=require("../middlewares/validacionesURL")
//Requiero el paquete expres-validator
const { body } = require('express-validator')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/img'));
  },
  filename: function (req, file, cb) {
    cb(null, 'product-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

router.get("/", controller.home)
router.get("/logout",controllersUser.logout)
router.get("/login", controllersUser.login)

router.get("/register",  controllersUser.register)
router.get("/product_details", controller.product_details)
router.get("/product_add", validaciones ,controller.product_add)
router.get("/shopping_cart", validaciones,controller.shopping_cart)
router.get("/edition_product", validaciones,controller.edition_product)
router.get("/adm_products", validaciones,controller.adm_products)

/* GET ALL PRODUCTS */
router.get("/productos", validaciones ,productsController.list)
/* CREATE ONE PRODUCT */
router.get('/productos/create', validaciones ,productsController.create);
router.post('/productos/create', upload.single('image'), productsController.save);
/* GET ONE PRODUCT */
router.get('/productos/detail/:id', productsController.details);
/* EDIT ONE PRODUCT */
router.get('/productos/edit/:id', validaciones , productsController.edit);
router.put('/productos/edit/:id', upload.single('image'), productsController.update);

/* DELETE ONE PRODUCT***/
router.delete('/productos/delete/:id', productsController.delete);
// validaciones de registro

const validationsRegister = [
  body('nombres').notEmpty().withMessage('El campo nombre no puede estar vacío'),
  body('apellidos').notEmpty().withMessage('El campo apellido no puede estar vacío'),
  body('email')
    .notEmpty().withMessage('El campo email no puede estar vacío').bail()
    .isEmail().withMessage('Agregar un email válido'),
  body('city').notEmpty().withMessage('Debes agregar un municipio'),
  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
      throw new Error('Debe subir una imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
      }
      return true;
    }
  }),
  body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
  body('confirmpassword').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
]
//users  
router.post('/register', upload.single('image'),validationsRegister, controllersUser.create);
//login
router.post('/login', controllersUser.loginProcess);

module.exports = router
