import Sequelize from 'sequelize';
import dbConfig from '../config/dbConfig.json';
import user from './user';

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = user(sequelize);

export default db;