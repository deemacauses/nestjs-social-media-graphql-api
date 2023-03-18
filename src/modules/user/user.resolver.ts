import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { UserDTO } from "./dto/user.dto";
import { UserService } from "./user.service";
import { User } from "./model/user.model";

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Args("id", { type: () => Number }) id: number): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Mutation((returns) => User)
  async createUser(@Args("user") user: UserDTO): Promise<User> {
    const createdUser = await this.userService.createUser(user);
    return createdUser;
  }
}
