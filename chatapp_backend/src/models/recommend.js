import { DataTypes } from 'sequelize';

const recommend = sequelize => {
    const Recommend = sequelize.define('recommend', {
        //  오전 12시, 오후 6시에 추천 2명씩
        origin_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        target_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Recommend;
}

export default recommend;