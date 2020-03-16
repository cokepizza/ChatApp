import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const user = sequelize => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    User.prototype.checkPassword = async function(password) {
        const result = await bcrypt.compare(password, this.password);
        return result;
    };

    User.prototype.setPassword = async function(password) {
        const hash = await bcrypt.hash(password, 10);
        this.password = hash;
    };

    User.prototype.serialize = function() {
        const data = this.toJSON();
        delete data.password;
        return data;
    };

    return User;
}

export default user;