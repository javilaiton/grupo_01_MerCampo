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
	index: (req, res) => {
		// Do the magic
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("products/product_add")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic

		let product ={
			id: id(),
			image:"agricultor.jpg",
			...req.body
			
		}
		/*console.log(product)
		res.send(product)*/
		//guardar
		products.push(product)

		let dbJson= JSON.stringify(products, null,4)
		fs.writeFileSync(productsFilePath, dbJson)

		res.redirect('/')
	},

	// Update - Form to edit
	edit: (req,res)=>{
        let products = products
        const idIngr = req.params.id;
        let productEditar = products.find(product=> product.id == idIngr);
        res.render(path.resolve(__dirname,'../views/edition_product'), {productEditar});
	},
	// Update - Method to update
	

	// Delete - Delete one product from DB
};

module.exports = productController ;