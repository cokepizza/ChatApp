import { DataTypes } from 'sequelize';

const dailyImage = sequelize => {
    const DailyImage = sequelize.define('dailyImage', {
        imagename: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,   
        },
        size: {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return DailyImage;
}

export default dailyImage;