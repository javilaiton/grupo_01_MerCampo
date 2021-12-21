const path = require('path')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const multer = require('multer')

const { validationResult } = require('express-validator');

const productsFilePath = path.resolve(__dirname, '../model/users.json');
const getListUsers= function () {
    let dbjson= JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return dbjson
}

const controllersUser = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/login'));
    },
    loginProcess: (req, res) => {
        let UsersList = getListUsers();
        let UserLoged = UsersList.find(usuario => usuario.email === req.body.email);
        
        if(UserLoged){
            let validationPassword = bcrypt.compareSync(req.body.password, UserLoged.password);
			if (validationPassword) {
				return res.redirect('/');
			}
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }})
        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }})
	},
    register: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/register'));
    },
    create:(req, res) => {
        let validation= validationResult(req)
        if (validation.errors.length > 0) {
			return res.render('./users/register', {
				errors: validation.mapped(),
				oldData: req.body
			})
		}else{
        let users=getListUsers()
        let lastUsers= users.pop()
        users.push(lastUsers)
        let imagen = req.file? req.file.filename : "imagen_por_defec.png"
		let newUsers ={
			id: lastUsers.id+1,
			name: req.body.nombres,
            lastname: req.body.apellidos,
            email: req.body.email,
            city: req.body.city,
            image: imagen,
            password:bcrypt.hashSync(req.body.password, 10)
		}
        //guardar
		users.push(newUsers)

		let dbJson= JSON.stringify(users, null,4)
		fs.writeFileSync(productsFilePath, dbJson)
		res.redirect('/login')
		
        } 
        
	},
    
}

module.exports = controllersUser