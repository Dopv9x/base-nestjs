import { Sequelize, DataTypes } from 'sequelize';
import { User } from './User';
const sequelize = new Sequelize('sqlite::memory:');

export const Role = sequelize.define('roles', {
  // Model attributes are defined here
  slug: {
    type: DataTypes.STRING,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
  },
  
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  // Other model options go here
});

Role.belongsToMany(User, { through: 'user_roles' });
