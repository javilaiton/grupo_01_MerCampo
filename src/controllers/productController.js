const productsModel = require("../model/productsModel");
const categoryModel = require("../model/categoryModel");
const { validationResult } = require('express-validator');

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
      //console.log(productos)
      res.render("products/adm_products", { productos });
    } catch (error) {
      res.render("error")
      //console.log(error);
    }
  },

  // Create - Form to create
  create: async (req, res) => {
    try {
      let categorias = await categoryModel.AllCategory();
      res.render("products/product_add", { categorias });
    } catch (error) {
      res.render("error")
      //console.log(error);
    }
  },
   // Create -  Method to store
  save: async (req, res) => {
    try {
      const resultValidation = validationResult(req);
      //console.log(resultValidation)
      if (resultValidation.errors.length > 0) {
        let categorias = await categoryModel.AllCategory();
        return res.render("products/product_add", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categorias
        })
      } else {
        let imagen = req.file ? req.file.filename : "agricultor.jpg";
        let product = {
          image: imagen,
          ...req.body,
        }
        productsModel.createProduct(product);
        res.redirect("/productos");
        
      }


    } catch (error) {
      res.render("error")
      //console.log(error)
    }
  },
  // Detail - Detail from one product

  details: async (req, res) => {
    try {
      let view = await productsModel.detailProduct(req.params.id);
      res.render("products/product_details", { view });
    } catch (error) {
      res.render("error")
      //console.log(error);
    }

  },
  // Update - Method to update
  edit: async (req, res) => {
    try {
      let productEditar = await productsModel.detailProduct(req.params.id)
      let categorias = await categoryModel.AllCategory()
      res.render("products/edition_product", { productEditar, categorias });
    } catch (error) {
      res.render("error")
      //console.log(error)
    }
  },
  update: async (req, res) => {
    try {
      const resultValidation = validationResult(req);
      //let imagen = req.file ? req.file.filename : productDb.image;
      if (resultValidation.errors.length > 0) {
        let categorias = await categoryModel.AllCategory();
        return res.render("products/product_add", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categorias
        })
      } else {

        const productEdited = {
          image: req.file.filename,
          ...req.body,
        }

        productsModel.editProduct(productEdited, req.params.id)
      res.redirect("/productos");
      }
    } catch (error) {
      res.render("error")
      //console.log(error);
    }
  },
  // Delete - Delete one product from DB
  delete: async (req, res) => {
    try {
      await productsModel.destroyProduct(req.params.id)
      res.redirect("/productos");

    } catch (error) {
      res.render("error")
      //console.log(error);
    }

  }
}

module.exports = productController;