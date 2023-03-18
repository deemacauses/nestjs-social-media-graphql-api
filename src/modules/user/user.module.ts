import { Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { userProvider } from "./user.provider";
import { UserResolver } from "./user.resolver";

@Module({
  providers: [UserService, UserResolver, ...userProvider],
  exports: [UserService],
})
export class UserModule {}
