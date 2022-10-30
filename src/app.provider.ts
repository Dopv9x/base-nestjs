import { Sequelize } from 'sequelize-typescript';
import { Role } from './models/Role';
import { User } from './models/User';
import { UserRole } from './models/UserRole';

export const AppProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({});
      sequelize.addModels([User, UserRole, Role]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
