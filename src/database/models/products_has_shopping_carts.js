const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_has_shopping_carts', {
    products_idproducts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'idproducts'
      }
    },
    shopping_carts_idshopping_carts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'shopping_carts',
        key: 'idshopping_carts'
      }
    }
  }, {
    sequelize,
    tableName: 'products_has_shopping_carts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "products_idproducts" },
          { name: "shopping_carts_idshopping_carts" },
        ]
      },
      {
        name: "fk_products_has_shopping_carts_shopping_carts1_idx",
        using: "BTREE",
        fields: [
          { name: "shopping_carts_idshopping_carts" },
        ]
      },
      {
        name: "fk_products_has_shopping_carts_products1_idx",
        using: "BTREE",
        fields: [
          { name: "products_idproducts" },
        ]
      },
    ]
  });
};
