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
            res.json({
                count: productAll.length,
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

    },
    getLastProduct: async (req, res) => {
        try {
            let product = await productsModel.lastProduct();
            const hostname = req.hostname;
            const protocolo = req.protocol;
            product = {
                idproducts: product.idproducts,
                image: protocolo +"://"+hostname+":3000" +"/img/"+ product.image,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.categories_idcategories,
            }
            res.json(product)
        } catch (err) {
            res.json({error: 'Error 404'})
        }
    }

}

module.exports = productApiController