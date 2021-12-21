
const controller = {
    home: (req,res)=>{
        res.render("home")
    },
    product_details:(req,res)=>{
        res.render("products/product_details")
    },
    product_add:(req,res)=>{
        res.render("products/product_add")
    },
    shopping_cart:(req,res)=>{
        res.render("products/shopping_cart")
    },
    edition_product:(req,res)=>{
        res.render("products/edition_product")
    },
    adm_products:(req,res)=>{
        res.render("products/adm_products")
    },

}

module.exports = controller