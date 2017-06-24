module.exports = function(sequelize , DataTypes) {
    var Cooks = sequelize.define('Cook', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biography: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        menu_1: {
            type: DataTypes.STRING,
            allowNull: false
        },        
        menu_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        menu_3: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Cooks;
};