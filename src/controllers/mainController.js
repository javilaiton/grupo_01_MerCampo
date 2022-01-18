const controller = {
    home: (req,res)=>{
        res.render("home")
    },
    product_details:(req,res)=>{
        res.render("products/product_details")
    },
    shopping_cart:(req,res)=>{
        res.render("products/shopping_cart")
    },
}

module.exports = controller