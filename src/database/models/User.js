module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idusers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        lastname: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        city: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        roles_idroles: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        
    }
    let config = { 
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)
        /*Product.associate = function (models){
        Product.hasMany(models.Category, {
            as: 'categories',
            foreingKey: 'categories_idcategories'
        }) 
    }*/

    return User;


}