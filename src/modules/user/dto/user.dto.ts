import {
  Matches,
  IsEmail,
  IsString,
  IsNotEmpty,
  IsAlphanumeric,
} from "class-validator";
import { ArgsType, InputType, Field } from "@nestjs/graphql";

@InputType()
@ArgsType()
export class UserDTO {
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Field()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
    message:
      "Password Error: Your password must contain at least 8 characters, including of uppercase and lowercase letters, numbers, and special characters. Please try again.",
  })
  @Field()
  password: string;
}
