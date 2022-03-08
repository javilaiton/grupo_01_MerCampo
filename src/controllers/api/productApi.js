const productsModel = require("../../model/productsModel");

const productApiController = {

    listProduct: async (req, res) => {
        try {
            let productAll = await productsModel.getList()
            let allVerduras = productAll.filter(
                (product) => product.categories_idcategories == 2

            );
            let allFrutas = productAll.filter(
                (product) => product.categories_idcategories == 1
            );
            let products = productAll.map((product) => {
                return productsProp = {
                    idproducts: product.idproducts,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.categories_idcategories,
                    details: "api/products/${ id }",
                }
            })
            res.json([{
                count: productAll.length,
                countByCategory: {
                    frutas: allFrutas.length,
                    verduras: allVerduras.length,
                },
                products: products,

            }])

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
                image: protocolo +"://"+hostname+"/img/"+ oneProduct.image,
                name: oneProduct.name,
                description: oneProduct.description,
                price: oneProduct.price,
                category: oneProduct.categories_idcategories,
            }
             res.json(products)
        } catch (error) {
            res.render("error")
        }

    },
    getLastProduct: async (req, res) => {
        try {
            let allProduct = await productsModel.getList()
            let lastProduct = allProduct[allProduct.length-1]
            let protocolo = req.protocol
            let hostname= req.hostname
            let product = {
                idproducts: lastProduct.idproducts,
                image: protocolo +"://"+hostname+"/img/"+ lastProduct.image,
                name: lastProduct.name,
                description: lastProduct.description,
                price: lastProduct.price,
                category: lastProduct.categories_idcategories,
            }
            res.json(product)
        } catch (err) {
            res.json({error: 'Error 404'})
        }
    }

}

module.exports = productApiController