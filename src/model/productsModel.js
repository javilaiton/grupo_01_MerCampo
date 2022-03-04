const fs = require('fs');
const path = require('path');
const db = require("../database/models")

const productsModel = {

    getList:async function(){
        try{
            let products = await db.products.findAll()
            return products

        }catch(error){
            console.log(error)
        }
    },

    detailProduct: async function(id){
        try{
            let oneProduct = await db.products.findByPk(id)
            return oneProduct
        }catch(error){
            console.log(error)
        }

    },
    oneProduct: async function(id){
        try {
            let product =await db.products.findByPk(id);
            return product; 
        } catch (error) {
            console.log(error);
        }        
    },

    createProduct: async function (product) {
        try{
            await db.products.create({
                ...product
            })
        }catch(error){
            console.log(error)
        }
    }, 

    editProduct: async function (product,id) {
        try{
            await db.products.update({
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
    lastProduct: async function () {
        try {
            let allProduct = await db.products.findAll();
            let last = 0;
            let lastproduct = allProduct.filter(product => {
                if (product.idusers > last) {
                    last = product.idusers;
                }
                return 
            });
            return lastproduct
        } catch (err) {
            console.log(err);
        }
    },

    list: function () {
        //return console.log( JSON.parse(fs.readFileSync(path.resolve(__dirname,"./products.json"),{encoding: "utf8"})));
        return console.log( dataProducts);
    },
    

    destroyProduct: async function(id){
        try{
            let oneProduct = await db.products.findByPk(id)
            //console.log(oneProduct)

            await oneProduct.destroy({
                where :{
                    idproducts: id
                }
            })
            this.deleteImage( oneProduct.image)

        }catch(error){
            console.log(error)
        }
    },

    deleteImage: function ( fileName) {
        fs.unlinkSync(path.resolve(__dirname, '..', '..', 'public', 'img', fileName));
    },
}

module.exports = productsModel

