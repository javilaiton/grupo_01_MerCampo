const productsModel = require("../../model/productsModel");

const productApiController = {
    listProduct: async (req, res) => {
        try {
            let allProduct = await productsModel.getList()
            let allFrutas = allProduct.filter(
                (product) => product.categories_idcategories == 1
            );
            let allVerduras = allProduct.filter(
                (product) => product.categories_idcategories == 2
            );
            let products = allProduct.map((product) => {
                return productsProp = {
                    idproducts: product.idproducts,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.categories_idcategories,
                    details: "api/products/${ id }",
                }
            })
            res.json({
                count: allProduct.length,
                countByCategory: {
                    frutas: allFrutas.length,
                    verduras: allVerduras.length,
                },
                products: products,

            })

        } catch (error) {
            res.render("error")
        }
    },
    getOneProduct: async (req, res) => {
        try {
            let oneProduct = await productsModel.oneProduct(req.params.id)      
            let protocolo = req.protocol
            let hostname= req.hostname
            products = {
                idproducts: oneProduct.idproducts,
                image: protocolo +"://"+hostname+":3000" +"/img/"+ oneProduct.image,
                name: oneProduct.name,
                description: oneProduct.description,
                price: oneProduct.price,
                category: oneProduct.categories_idcategories,
            }
            res.json(products)
        } catch (error) {
            res.render("error")
        }

    }
}

module.exports = productApiController