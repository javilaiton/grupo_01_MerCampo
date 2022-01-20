module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        idproducts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        categories_idcategories: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        
    }
    let config = { 
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config)
        /*Product.associate = function (models){
        Product.belongsTo(models.Category, {
            as: 'categories',
            foreingKey: 'categories_idcategories'
        }) 
    }*/

    return Product;


}