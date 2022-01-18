const db = require('../database/models');
const productsModel = require('../model/productsModel');
const controller = {
    home: async(req,res)=>{
        try{
            let productos = await productsModel.getList()
            res.render("home", {productos})

        }catch(error){
            console.log(error)

        }
        
    },
    product_details:(req,res)=>{
        res.render("products/product_details")
    },
    shopping_cart:(req,res)=>{
        res.render("products/shopping_cart")
    },
}

module.exports = controller