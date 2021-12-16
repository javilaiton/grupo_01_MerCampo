const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../model/products.json');



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const getListProducts= function () {
    let dbjson= JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return dbjson
}

const updateProduct = function (productEdited) {
    const ProductIndex = getListProducts().findIndex((elem) => elem.id == productEdited.id);
    if (ProductIndex < 0) return "No existe este producto en la base de datos";
    let newList = getListProducts();
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
        let products=getListProducts()
        let lastproduct= products.pop()
        products.push(lastproduct)
        let imagen = req.file? req.file.filename : "agricultor.jpg"
		let product ={
			id: lastproduct.id+1,
			image: imagen ,
			...req.body
			
		}
		//guardar
		products.push(product)

		let dbJson= JSON.stringify(products, null,4)
		fs.writeFileSync(productsFilePath, dbJson)
		res.redirect('/productos')
	},

	// Detail - Detail from one product
	
	details: (req,res) =>{
        let productos = getListProducts()
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
        let productos =getListProducts()
        const verId = req.params.id;
        let productEditar = productos.find(elem=> elem.id == verId);
        res.render("products/edition_product" , {productEditar});
    },
	update: (req,res) =>{
        let id=req.params.id
        
        let productDb=getListProducts().find(elem=> elem.id == id)
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