import { NestFactory, Reflector } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

import { AppModule } from "./app.module";
import { AuthGuard } from "./common/guards";
import { UserService } from "./modules/user/user.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");

  const reflector = app.get(Reflector);
  const jwtService = app.get(JwtService);
  const configService = app.get(ConfigService);
  const userService = app.get(UserService);

  app.useGlobalGuards(new AuthGuard(reflector, jwtService, userService));

  await app.listen(configService.get("PORT"));
}
bootstrap();
