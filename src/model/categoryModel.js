const db = require("../database/models")
const categoryModel = {
  AllCategory: async function(){
    try{
      let allCategories = db.categories.findAll()
      return allCategories
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = categoryModel;