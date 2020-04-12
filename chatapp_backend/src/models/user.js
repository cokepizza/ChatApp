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
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        introduction: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        school: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        job: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        work: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        region: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        birthYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        birthMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brithDay: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tall: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shape: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        character: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        bloodType: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        smoking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        drinking: {
            type: DataTypes.INTEGER,
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