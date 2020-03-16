import { DataTypes } from 'sequelize';

const image = sequelize => {
    const Image = sequelize.define('image', {
        imagename: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,   
        },
        type: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Image;
}

export default image;