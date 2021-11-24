const express = require ('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const rutas = require("./routes/main.routes")
// Pasar poder usar los métodos PUT y DELETE
const methodOverride =  require('method-override'); 



app.use(express.static(path.resolve(__dirname,'../public')));

app.set("view engine","ejs")

app.set('views', path.resolve(__dirname, './views'));
//capturar información 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(methodOverride('_method')); 

app.use("/",rutas)
app.use("/login",rutas)
app.use("/register",rutas)
app.use("/product_details",rutas)
app.use("/product_add",rutas)
app.use("/shopping_cart",rutas)
app.use("/edition_product",rutas)
app.use("/adm_products",rutas)


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





