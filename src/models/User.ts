import { Sequelize, DataTypes } from 'sequelize';
import { Role } from './Role';
const sequelize = new Sequelize('sqlite::memory:');

export const User = sequelize.define(
  'users',
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    // Other model options go here
  },
);

User.belongsToMany(Role, { through: 'user_roles' });
