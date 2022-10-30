import { Sequelize, DataTypes } from 'sequelize';
import { Role } from './Role';
import { User } from './User';
const sequelize = new Sequelize('sqlite::memory:');

export const UserRole = sequelize.define('user_roles', {
  // Model attributes are defined here
  user_id: {
    type: DataTypes.NUMBER,
    references: {
      model: User, // 'Movies' would also work
      key: 'id'
    }
  },
  role_id: {
    type: DataTypes.NUMBER,
    references: {
      model: Role, // 'Movies' would also work
      key: 'id'
    }
  },
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  // Other model options go here
});


User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });