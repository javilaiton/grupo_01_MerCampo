const { body } = require('express-validator');

const validationsLogin = [
    body('email').notEmpty().withMessage('Escribe tu correo')
    .isEmail().withMessage('Ingresa un correo válido')
    
];

module.exports =  validationsLogin;
