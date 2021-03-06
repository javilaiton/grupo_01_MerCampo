const bcrypt = require('bcryptjs');
const multer = require('multer')
const usersModel = require("../model/usersModel");
const roleModel = require("../model/roleModel");
const { validationResult } = require('express-validator');




const userController = {
    // lista de usuarios
    details_users: (req, res) => {
        res.render("users/details_user")
    },
    edition_users: (req, res) => {
        res.render("users/edition_user")
    },
    listUsers: async (req, res) => {
        try {
            let users = await usersModel.getUsers();
            //console.log(users)
            res.render("products/adm_products", { users });
        } catch (error) {
            res.render("error")
            //console.log(error);
        }
    },
    login: (req, res) => {
        if (req.session.userlogged) {
            res.redirect("/")
        } else {
            res.render("users/login");
        }

    },
    loginProcess: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            //console.log(resultValidation)
            if (resultValidation.errors.length > 0) {
                return res.render('./users/login', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            } else {
                let { email, password } = req.body;
                let UserRegistered = await usersModel.findUser(email);
                if (UserRegistered) {
                    let validationPassword = bcrypt.compareSync(req.body.password, UserRegistered.password);
                    if (validationPassword) {
                        req.session.userlogged = UserRegistered
                        if (req.body.remember != undefined) {  //verificar que el checkbox este activado
                            delete req.body.password //borramos el password de la cookie del usuario localmente para no ser leida en la cookie
                            res.cookie('remember', req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 * 12 }) // creamos la cookie llamada remember y le asignamos el usuario
                            //por medio del req.body.email maxAge = tiempo de 1 a??o
                        }


                        return res.redirect('/');
                    }

                } else {
                    return res.render('users/login', {
                        errors: {
                            email: {
                                msg: 'Las credenciales son inv??lidas'
                            }
                        }
                    })

                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inv??lidas'
                        }
                    }
                })

            }

        } catch (error) {
            res.render("error")
            //console.log(error);
        }

    },
    register: async (req, res) => {
        try {
            if (req.session.userlogged) {
                res.redirect("/")
            } else {
                let roles = await roleModel.AllRole();
                //res.json(roles)
                //console.log(roles)
                res.render("users/register", { roles });
            }

        } catch (error) {
            res.render("error")
            //console.log(error);
        }

    },

    save: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            //console.log(resultValidation)
            if (resultValidation.errors.length > 0) {
                let roles = await roleModel.AllRole();
                return res.render('./users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    roles
                })
            } else {

                let imagen = req.file ? req.file.filename : "imagen_por_defec.png"
                let user = {
                    ...req.body,
                    image: imagen,
                    password: bcrypt.hashSync(req.body.password, 10),
                }

                usersModel.createUsers(user)
                res.redirect('/login')
            }


        } catch (error) {
            res.render("error")
            //console.log(error)
        }
    },
    //Editar Usuario
    editUser: async (req, res) => {
        try {

            let user = await usersModel.oneUser(req.params.id, req.body)
            res.render('users/edition_user', { user })
        } catch (error) {
            res.render("error")
            //console.log(error);
        }

    },
    update: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            let user = await usersModel.oneUser(req.params.id, req.body)
            //let imagen = req.file ? req.file.filename : productDb.image;
            if (resultValidation.errors.length > 0) {
                return res.render("users/edition_user", {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    user
                })
            } else  {

                const userEdit = {
                    ...req.body,
                    image: req.file.filename,
                }

                await usersModel.UserEdit(req.params.id, userEdit)

                let user = await usersModel.oneUser(req.params.id)
                if (req.session.userlogged) {

                    //req.session.destroy()
                    req.session.userlogged = user
                    if (req.body.remember != undefined) {  
                        delete req.body.password 
                        res.cookie('remember', req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 30 * 12 }) 
                    }

                }

                res.redirect("/perfil");
            }
        } catch (error) {
            res.render("error")
            //console.log(error);
        }
    },
    logout: (req, res) => {
        res.clearCookie('remember') // borramos la cookie
        req.session.destroy() // destruimos la sesion (eliminamos el usuario logeado)
        res.redirect('/')
    }

}

module.exports = userController;

//userController.onePerfil(9)
