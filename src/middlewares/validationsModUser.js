const { body } = require('express-validator');
const path = require('path')

const validationsModUSer = [
    body('name')
    .notEmpty().withMessage('El campo nombre no puede estar vacío')
    .isLength({ min: 2 }).withMessage('Escribe un nombre Válido'),
    body('lastname')
    .notEmpty().withMessage('El campo apellido no puede estar vacío')
    .isLength({ min: 2 }).withMessage('Escribe un Apellido Válido'),
    body('email')
      .notEmpty().withMessage('El campo email no puede estar vacío').bail()
      .isEmail().withMessage('Agregar un email válido'),
    body('city').notEmpty().withMessage('Debes agregar una ciudad'),
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
  ]
  module.exports = validationsModUSer;