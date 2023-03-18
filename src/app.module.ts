import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import config from "config";

import { UserModule } from "./modules/user/user.module";
import { DatabaseModule } from "./modules/database/database.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "graphql/schema.gql",
    }),
    DatabaseModule,
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    UserModule,
  ],
})
export class AppModule {}
