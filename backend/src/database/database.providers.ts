import { Sequelize } from "sequelize-typescript";
import { User } from "../users/entities/user.entity";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mssql",
        host: "db",
        port: 1433,
        username: "db_user",
        password: "db_p@ssword123",
        database: "db_user_system"
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
