const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_has_products', {
    users_idusers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'idusers'
      }
    },
    products_idproducts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'idproducts'
      }
    }
  }, {
    sequelize,
    tableName: 'users_has_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "users_idusers" },
          { name: "products_idproducts" },
        ]
      },
      {
        name: "fk_users_has_products_products1_idx",
        using: "BTREE",
        fields: [
          { name: "products_idproducts" },
        ]
      },
      {
        name: "fk_users_has_products_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_idusers" },
        ]
      },
    ]
  });
};
