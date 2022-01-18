const fs = require("fs");
const path = require("path");
const productsModel = require("../model/productsModel");

const productsFilePath = path.resolve(__dirname, "../model/products.json");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const getListProducts = function () {
  let dbjson = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  return dbjson;
};

const updateProduct = function (productEdited) {
  const ProductIndex = getListProducts().findIndex(
    (elem) => elem.id == productEdited.id
  );
  if (ProductIndex < 0) return "No existe este producto en la base de datos";
  let newList = getListProducts();
  newList[ProductIndex] = productEdited;
  let dbJson = JSON.stringify(newList, null, 4);
  fs.writeFileSync(productsFilePath, dbJson);
  return "Actualizado con éxito";
};

const productController = {
  adm_products: (req, res) => {
    res.render("products/adm_products");
  },
  product_add: (req, res) => {
    res.render("products/product_add");
  },
  edition_product: (req, res) => {
    res.render("products/edition_product");
  },
  // Root - Show all products
  list: async (req, res) => {
    try {
      let productos = await productsModel.getList();
      res.render("products/adm_products", { productos });
    } catch (error) {
      console.log(error);
    }
    //let productos = getListProducts()
    //res.render("products/adm_products", {productos})
  },

  // Create - Form to create
  create: async (req, res) => {
    try {
      let categorias = await categoryModel.AllCategory();
      res.render("products/product_add", { categorias });
    } catch (error) {
      console.log(error);
    }
  },

  // Create -  Method to store
  save: async (req, res) => {
    try {
      let imagen = req.file ? req.file.filename : "agricultor.jpg";
      let product = {
        image: imagen,
        ...req.body,
      };
      await productsModel.createProduct(product);
      res.redirect("/productos");
    } catch (error) {
      console.log(error);
    }
  },
  // Detail - Detail from one product
  details: async (req, res) => {
    try {
      let view = await productsModel.detailProduct(req.params.id);
      res.render("products/product_details", { view });
    } catch (error) {
      console.log(error);
    }
    /*let productos = getListProducts()
            let view;
            productos.forEach(elem => {
                if(elem.id == req.params.id){
                    view = elem;
                }
            });
            res.render("products/product_details", {view})*/
  },
  // Update - Method to update
  edit: async (req, res) => {
    try {
      let productEditar = await productsModel.detailProduct(req.params.id);
      let categorias = await categoryModel.AllCategory();
      res.render("products/edition_product", { productEditar, categorias });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      let imagen = req.file ? req.file.filename : productDb.image;
      const productEdited = {
        image: imagen,
        ...req.body,
      };
      await productsModel.editProduct(productEdited, req.params.id);
      res.redirect("/productos");
    } catch (error) {
      console.log(error);
    }
  },
  // Delete - Delete one product from DB
  delete: (req, res) => {
    const idProductToDelete = req.params.id;
    let dbJson = JSON.stringify(
      arrayProducts.filter((elem) => elem.id != idProductToDelete),
      null,
      4
    );
    fs.writeFileSync(productsFilePath, dbJson);
    res.redirect("/productos");
  },
};

module.exports = productController;
