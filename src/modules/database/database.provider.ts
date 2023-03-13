import { ConfigService } from "@nestjs/config";
import { Sequelize } from "sequelize-typescript";

import {
  DATABASE_PROVIDER,
  DATABASE_CONFIG,
} from "../../common/constants/index";

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        ...configService.get(DATABASE_CONFIG),
      });
      sequelize.addModels([]);
      return sequelize;
    },
    inject: [ConfigService],
  },
];
