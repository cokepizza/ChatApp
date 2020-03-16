import { DataTypes } from 'sequelize';

const chat = sequelize => {
    const Chat = sequelize.define('chat', {
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

    return Chat;
}

export default chat;