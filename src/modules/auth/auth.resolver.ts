/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args } from "@nestjs/graphql";

import { Public } from "./../../common/decorators/public.decorator";
import { AuthService } from "./auth.service";
import { User } from "./../user/model/user.model";
import { UserDTO } from "./../user/dto/user.dto";
import { AuthDTO } from "./dto/auth.dto";

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation((returns) => User)
  async login(@Args("user") user: AuthDTO): Promise<User> {
    const createdUser = await this.authService.login(user);
    return createdUser;
  }

  @Public()
  @Mutation((returns) => User)
  async signup(@Args("user") user: UserDTO): Promise<User> {
    const createdUser = await this.authService.signup(user);
    return createdUser;
  }
}
