import { IsString, IsNotEmpty } from "class-validator";
import { ArgsType, InputType, Field } from "@nestjs/graphql";

@InputType()
@ArgsType()
export class AuthDTO {
  @IsNotEmpty()
  @IsString()
  @Field()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;
}
