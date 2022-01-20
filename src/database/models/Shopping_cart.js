module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping_cart';
    let cols = {
        idshopping_carts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_idusers: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        
        
    }
    let config = { 
        timestamps: false
    }

    const Shopping_cart = sequelize.define(alias,cols,config)
    /*Category.associate = function (models){
        Category.belongsTo(models.Product, {
            as: 'product',
            foreingKey: 'categories_idcategories'
        }) 
    }*/

    return Shopping_cart;
}