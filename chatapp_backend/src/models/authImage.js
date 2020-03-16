import { DataTypes } from 'sequelize';

const authImage = sequelize => {
    const AuthImage = sequelize.define('authImage', {
        imagename: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,   
        },
        order: {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        size: {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return AuthImage;
}

export default authImage;