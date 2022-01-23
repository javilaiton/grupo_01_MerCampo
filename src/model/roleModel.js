const db = require("../database/models")
const roleModel = {
  AllRole: async function(){
    try{
      let allRole = db.roles.findAll()
      return allRole
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = roleModel;