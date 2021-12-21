const express = require ('express')
const router = express.Router()
const path = require('path')
const controllersUser = require('../controllers/controllersUser');

const bcrypt = require("bcryptjs");
const fs = require("fs");
const multer = require("multer");
const { body } = require("express-validator");

//Requiero el paquete expres-validator
const { body } = require('express-validator')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
      cb(null, 'product-'+Date.now()+path.extname(file.originalname))
    }
})
   
const upload = multer({ storage })




//validaciones del registro



module.exports = router