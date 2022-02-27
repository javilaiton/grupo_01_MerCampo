const { body } = require('express-validator');

const validationsLogin = [
    body('email').notEmpty().withMessage('Dato incorrecto')
    .isEmail().withMessage('Ingresa un correo válido')
    
];

module.exports =  validationsLogin;
