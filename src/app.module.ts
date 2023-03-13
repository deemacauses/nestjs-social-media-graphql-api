import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "config";

import { DatabaseModule } from "./modules/database/database.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
  ],
})
export class AppModule {}
