import { DataTypes } from 'sequelize';

const user = sequelize =>
    sequelize.define('user', {
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        sex: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
        timestamps: false,
    });

export default user;