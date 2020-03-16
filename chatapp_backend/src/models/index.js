import Sequelize from 'sequelize';
import dbConfig from '../config/dbConfig.json';
import user from './user';
import authImage from './authImage';
import dailyImage from './dailyImage';

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = user(sequelize);
db.AuthImage = authImage(sequelize);
db.DailyImage = dailyImage(sequelize);

db.User.hasMany(db.AuthImage, { foreignKey: 'userId', sourceKey: 'id' });
db.AuthImage.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });

db.User.hasMany(db.DailyImage, { foreignKey: 'userId', sourceKey: 'id' });
db.DailyImage.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });

export default db;