const express = require ('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mainRutas = require("./routes/main.routes")
const productRutas= require("./routes/products.routes")
const loggedMiddleware=require("../src/middlewares/loggedMiddleware")

// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override'); 
//sesiones 
const session = require('express-session');



app.use(session({secret: "top-secret", resave: false, saveUninitialized: false}));
app.use(loggedMiddleware)
app.use(express.static(path.resolve(__dirname,'../public')));

app.set("view engine","ejs")

app.set('views', path.resolve(__dirname, './views'));
//capturar información 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method')); 

app.use("/",mainRutas)
app.use("/login",mainRutas)
app.use("/register",mainRutas)
app.use("/adm_products",mainRutas)
app.use("/shopping_cart",mainRutas)




app.use("/product_details",mainRutas)
app.use("/product_add",mainRutas)
app.use("/edition_product",mainRutas)



/*
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
}) 
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/product_details',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/product_details.html'))
})
app.get('/shopping_cart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/shopping_cart.html'))
})
*/

app.listen(port, () => console.log(`Server in port ${port}`));



