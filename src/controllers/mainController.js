
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
    edition_product:(req,res)=>{
        res.render("products/edition_product")
    }


}

module.exports = controller