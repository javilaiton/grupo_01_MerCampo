var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _products = require("./products");
var _products_has_shopping_carts = require("./products_has_shopping_carts");
var _roles = require("./roles");
var _shopping_carts = require("./shopping_carts");
var _users = require("./users");
var _users_has_products = require("./users_has_products");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_has_shopping_carts = _products_has_shopping_carts(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var shopping_carts = _shopping_carts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_has_products = _users_has_products(sequelize, DataTypes);

  products.belongsToMany(shopping_carts, { as: 'shopping_carts_idshopping_carts_shopping_carts', through: products_has_shopping_carts, foreignKey: "products_idproducts", otherKey: "shopping_carts_idshopping_carts" });
  products.belongsToMany(users, { as: 'users_idusers_users', through: users_has_products, foreignKey: "products_idproducts", otherKey: "users_idusers" });
  shopping_carts.belongsToMany(products, { as: 'products_idproducts_products', through: products_has_shopping_carts, foreignKey: "shopping_carts_idshopping_carts", otherKey: "products_idproducts" });
  users.belongsToMany(products, { as: 'products_idproducts_products_users_has_products', through: users_has_products, foreignKey: "users_idusers", otherKey: "products_idproducts" });
  products.belongsTo(categories, { as: "categories_idcategories_category", foreignKey: "categories_idcategories"});
  categories.hasMany(products, { as: "products", foreignKey: "categories_idcategories"});
  products_has_shopping_carts.belongsTo(products, { as: "products_idproducts_product", foreignKey: "products_idproducts"});
  products.hasMany(products_has_shopping_carts, { as: "products_has_shopping_carts", foreignKey: "products_idproducts"});
  users_has_products.belongsTo(products, { as: "products_idproducts_product", foreignKey: "products_idproducts"});
  products.hasMany(users_has_products, { as: "users_has_products", foreignKey: "products_idproducts"});
  users.belongsTo(roles, { as: "roles_idroles_role", foreignKey: "roles_idroles"});
  roles.hasMany(users, { as: "users", foreignKey: "roles_idroles"});
  products_has_shopping_carts.belongsTo(shopping_carts, { as: "shopping_carts_idshopping_carts_shopping_cart", foreignKey: "shopping_carts_idshopping_carts"});
  shopping_carts.hasMany(products_has_shopping_carts, { as: "products_has_shopping_carts", foreignKey: "shopping_carts_idshopping_carts"});
  shopping_carts.belongsTo(users, { as: "users_idusers_user", foreignKey: "users_idusers"});
  users.hasMany(shopping_carts, { as: "shopping_carts", foreignKey: "users_idusers"});
  users_has_products.belongsTo(users, { as: "users_idusers_user", foreignKey: "users_idusers"});
  users.hasMany(users_has_products, { as: "users_has_products", foreignKey: "users_idusers"});

  return {
    categories,
    products,
    products_has_shopping_carts,
    roles,
    shopping_carts,
    users,
    users_has_products,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
