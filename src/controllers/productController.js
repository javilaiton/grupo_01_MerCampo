const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../model/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//Para que me agregue el id segun el ultimo de mi j.som
const id = () =>{
	let ultimoId=0
	products.forEach(product => {
		if(product.id > ultimoId){
			ultimoId= product.id
		} 
	});
	return ultimoId +1
}

const productController = {
	// Root - Show all products
	list: (req,res) =>{
        let productos = arrayProducts
        res.render("products/adm_products", {productos})
    },

	// Create - Form to create
	create: (req, res) => {
		res.render("products/product_add")
	},
	
	// Create -  Method to store
	save: (req, res) => {
        let imagen = req.file? req.file.filename : "agricultor.jpg"
		let product ={
			id: id(),
			image: imagen ,
			...req.body
			
		}
		//guardar
		arrayProducts.push(product)

		let dbJson= JSON.stringify(arrayProducts, null,4)
		fs.writeFileSync(productsFilePath, dbJson)
		res.redirect('/productos')
	},

	// Detail - Detail from one product
	
	details: (req,res) =>{
        let productos = arrayProducts
        let view;
        productos.forEach(elem => {
            if(elem.id == req.params.id){
                view = elem;
            }
        });
        res.render("products/product_details", {view})
	
	},
};

module.exports = productController ;