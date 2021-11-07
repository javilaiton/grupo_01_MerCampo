
const controller = {
    home: (req,res)=>{
        res.render("home")
    },
    login:(req,res)=>{
        res.render("users/login")
    },
    register:(req,res)=>{
        res.render("users/register")
    },
    product_details:(req,res)=>{
        res.render("products/product_details")
    },
    shopping_cart:(req,res)=>{
        res.render("products/shopping_cart")
    },
    adm_products:(req,res)=>{
        res.render("products/adm_products")
    },

}

module.exports = controller