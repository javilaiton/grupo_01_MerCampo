const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require("../database/models")

const usersModel = {
    // me trae todos los usuarios
    getUsers:async function(){
        try{
            let users = await db.users.findAll()
            //console.log(users.length)
            return users

        }catch(error){
            console.log(error)
        }
    },
    createUsers: async function (user) {
        try{
            await db.users.create({
                name:user.name,
                lastname:user.lastname,
                email:user.email,
                city:user.city,
                image:user.image,
                password: user.password,
                roles_idroles: user.roles_idroles,
            })
        }catch(error){
            console.log(error)
        }
    },
    oneUser: async function(id){
        try {
            let user =await db.users.findByPk(id);
            return user; 
        } catch (error) {
            console.log(error);
        }        
    },
   
    findUser: async function(email) {
        try {
            let oneUser= await db.users.findOne({
                where:{
                    email: email,
                    //password: bcrypt.compareSync(password,password)
                }
            })
            //console.log(oneUser)
            return oneUser;
        } catch (error) {
            console.log(error);
        }
    },
    UserEdit: async function (id,user) {
        try{
            await db.users.update({
                name:user.name,
                lastname:user.lastname,
                email:user.email,
                city:user.city,
                image:user.image,
            },{
                where: {
                    idusers: id
                }
            })
        }catch(error){
            console.log(error)
        }
    },

}
module.exports = usersModel

//usersModel.findUser("tania@gmail.com")



