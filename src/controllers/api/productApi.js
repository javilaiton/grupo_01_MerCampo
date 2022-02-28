const productsModel = require("../../model/productsModel");

const productApiController = {
    listProduct: async (req, res) => {
        try {
            let allProduct = await productsModel.getList()
            let products = allProduct.map((product) => {
                return productsProp = {
                    idproducts: product.idproducts,
                    image: product.image,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    category: product.categories_idcategories,
                    details: "api/products",
                }
            })
            res.json({
                count: allProduct.length,
                countCategory:categories.total.length,
                users: products,

            })

        } catch (error) {
            res.render("error")
        }
    },
    getOneProduct: async (req, res) => {
        try {
            let oneProduct = await productsModel.oneProduct(req.params.id)
            products = {
                idproducts: oneProduct.idproducts,
                image: oneProduct.image,
                name: oneProduct.name,
                description: oneProduct.description,
                price: oneProduct.price,
                category: oneProduct.categories_idcategories,
                details: "api/products",
            }
            res.json(products)
        } catch (error) {
            res.render("error")
        }

    }
}

module.exports = productApiController