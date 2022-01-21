const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shopping_carts', {
    idshopping_carts: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    users_idusers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'idusers'
      }
    }
  }, {
    sequelize,
    tableName: 'shopping_carts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idshopping_carts" },
        ]
      },
      {
        name: "fk_shopping_carts_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_idusers" },
        ]
      },
    ]
  });
};
