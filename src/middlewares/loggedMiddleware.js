const usersModel = require("../model/usersModel");

async function loggedMiddleware (req, res, next){
    let user = undefined;
    res.locals.isLogged = false; // se crea un locals llamado isLogged con parametro falso para la vista EJS
    let cookiesCreate = req.cookies.remember; //requerir la coockie creada en userController
    if(cookiesCreate!=undefined){
        user = await usersModel.findUser('email', cookiesCreate) //buscar al usuario por email con la cookie creada
    }
    if(user!=undefined){
        delete user.password; //borrar la contraseña del usuario localmente
        req.session.userLogged = user //asignar a la session el usuario logeado
    }
    if(req.session.userlogged){//verificar que el usuario este logeado
        res.locals.logged=true// si esta logeado cambia el loged a true
        res.locals.userSession=req.session.userlogged //le enviamos a la vista EJS el usuario que se log
    }
    next()
}

module.exports = loggedMiddleware;