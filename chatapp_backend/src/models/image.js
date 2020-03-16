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
        owner: {
            
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

    Image.prototype.checkPassword = async function(password) {
        const result = await bcrypt.compare(password, this.password);
        return result;
    };

    return Image;
}

export default image;