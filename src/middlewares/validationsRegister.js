const { body } = require('express-validator');
const path = require('path')

const validationsRegister = [
    body('name')
    .notEmpty().withMessage('El campo nombre no puede estar vacío')
    .isLength({ min: 2 }).withMessage('Escribe un nombre Válido'),
    body('lastname').notEmpty().withMessage('El campo apellido no puede estar vacío')
    .isLength({ min: 2 }).withMessage('Escribe un Apellido Válido'),
    body('email')
      .notEmpty().withMessage('El campo email no puede estar vacío').bail()
      .isEmail().withMessage('Agregar un email válido'),
    body('city').notEmpty().withMessage('Debes agregar un municipio'),
    body('roles_idroles').notEmpty().withMessage('Debes escoger un rol'),
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
    body('password').isLength({min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caractéres'),
    body('confirmpassword').isLength({min: 8 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 8 caractéres'),
  ]
  module.exports = validationsRegister;