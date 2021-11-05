
const controller = {
    home: (req,res)=>{
        res.render("home")
    },
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    },
    product_details:(req,res)=>{
        res.render("product_details")
    },
    shopping_cart:(req,res)=>{
        res.render("shopping_cart")
    },


}

module.exports = controller