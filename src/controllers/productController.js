const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../model/products.json');
const arrayProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const getListProducts= function () {
    let dbjson= JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return dbjson
}
//Para que me agregue el id segun el ultimo de mi j.som
const id = () =>{
	let ultimoId=0
	getListProducts().forEach(product => {
		if(product.id > ultimoId){
			ultimoId= product.id
		} 
	});
	return ultimoId +1
}
const updateProduct = function (productEdited) {
    const ProductIndex = arrayProducts.findIndex((elem) => elem.id == productEdited.id);
    if (ProductIndex < 0) return "No existe este producto en la base de datos";
    let newList = arrayProducts;
    newList[ProductIndex] = productEdited;
    let dbJson= JSON.stringify(newList, null,4)
	fs.writeFileSync(productsFilePath, dbJson)
    return "Actualizado con éxito";
}



const productController = {
	// Root - Show all products
	list: (req,res) =>{
        let productos = getListProducts()
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
    // Update - Method to update
	edit: (req,res)=>{
        let productos = arrayProducts
        const verId = req.params.id;
        let productEditar = productos.find(elem=> elem.id == verId);
        res.render("products/edition_product" , {productEditar});
    },
	update: (req,res) =>{
        let id=req.params.id
        
        let productDb=arrayProducts.find(elem=> elem.id == id)
        let imagen = req.file? req.file.filename : productDb.image
        const productEdited={
            id: productDb.id,
			image: imagen,
            ...req.body
        }
        updateProduct(productEdited)
        res.redirect("/productos")
    },
	// Delete - Delete one product from DB
    delete: (req,res) =>{
        const idProductToDelete = req.params.id;
        let dbJson= JSON.stringify(getListProducts().filter(elem => elem.id != idProductToDelete), null,4)
	    fs.writeFileSync(productsFilePath, dbJson)
        res.redirect("/productos");

    }
};

module.exports = productController ;