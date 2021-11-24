const fs = require('fs');
const path = require('path');
// Para poder utilizar mis archivos .json
const dataProducts = require('../model/products.json');

const productModel = {

    list: function () {
        //return console.log( JSON.parse(fs.readFileSync(path.resolve(__dirname,"./products.json"),{encoding: "utf8"})));
        return console.log( dataProducts);
    },

    createProduct: function (product) {
        dataProducts.push(product)
        fs.writeFileSync(path.resolve(__dirname,"./products.json"),JSON.stringify(dataProducts,null,4),{encoding: "utf8"})
      }, 

}

productModel.createProduct(
    {
        id: 10,
        name: "papaya",
        category: "Fruta",
        description: "bla bla vla",
        image: "aguacates.jpg"
    }
)
productModel.list()


module.exports = productModel

productModel.list()