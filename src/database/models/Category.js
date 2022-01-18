module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        idcategories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        
        
    }
    let config = { 
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config)
    /*Category.associate = function (models){
        Category.hasMany(models.Product, {
            as: 'products',
            foreingKey: 'categories_idcategories'
        }) 
    }*/

    return Category;
}