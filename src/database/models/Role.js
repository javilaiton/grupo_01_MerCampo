module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
    let cols = {
        idroles: {
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

    const Role = sequelize.define(alias,cols,config)
    /*Category.associate = function (models){
        Category.belongsTo(models.Product, {
            as: 'product',
            foreingKey: 'categories_idcategories'
        }) 
    }*/

    return Role;
}