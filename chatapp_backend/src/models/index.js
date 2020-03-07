import Sequelize from 'sequelize';
import configJson from '../config/config.json';
import user from './user';

const env = process.env.NODE_ENV || 'development';
const config = configJson[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = user(sequelize);

export default db;