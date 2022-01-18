const fs = require('fs');
const path = require('path');
// Para poder utilizar mis archivos .json
const dataProducts = require('../model/products.json');
const db = require("../database/models")

const productsModel = {

    getList:async function(){
        try{
            let products = await db.Product.findAll()
            return products

        }catch(error){
            console.log(error)
        }
    },

    detailProduct: async function(id){
        try{
            let oneProduct = await db.Product.findByPk(id)
            return oneProduct
        }catch(error){
            console.log(error)
        }

    },

    createProduct: async function (product) {
        try{
            await db.Product.create({
                ...product
            })
        }catch(error){
            console.log(error)
        }
    }, 

    editProduct: async function (product,id) {
        try{
            await db.Product.update({
                ...product
            },{
                where: {
                    idproducts: id
                }
            })
        }catch(error){
            console.log(error)
        }
    },

    list: function () {
        //return console.log( JSON.parse(fs.readFileSync(path.resolve(__dirname,"./products.json"),{encoding: "utf8"})));
        return console.log( dataProducts);
    },
}

module.exports = productsModel