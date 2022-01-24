const express = require ('express')
const router = express.Router()
const path = require('path')
const userController = require('../controllers/userController')
const validationsRegister = require('../middlewares/validationsRegister');
const validationsLogin = require('../middlewares/validationsLogin');

const bcrypt = require("bcryptjs");
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/img/users'));
    },
    filename: function (req, file, cb) {
      cb(null, 'user-'+Date.now()+path.extname(file.originalname))
    }
})
   
const upload = multer({ storage })


//users  
router.get("/register",  userController.register)
router.post('/register', upload.single('image'),validationsRegister, userController.save);
//login
router.get("/login", userController.login)
router.post("/login",validationsLogin, userController.loginProcess);
router.get("/logout",userController.logout)

//perfil
router.get("/perfil", userController.details_users);

//editar productor
router.get("/perfil/edit", userController.edition_users);
router.put("/edition_user/:id", userController.edition_users);









module.exports = router