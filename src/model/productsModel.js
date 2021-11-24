const fs = require('fs');
const path = require('path');
// Para poder utilizar mis archivos .json
const dataProducts = require('../model/products.json');
const productsFilePath = path.resolve(__dirname, '../model/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productModel = {
   // lineas de codigo para el listado faltan 
    create: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/products.json')));
        res.render(path.resolve(__dirname, '../views/products/product_add'));
    },
}