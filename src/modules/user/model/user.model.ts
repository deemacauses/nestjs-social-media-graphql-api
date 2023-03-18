import {
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Unique,
  Table,
  Scopes,
} from "sequelize-typescript";
import { Field, ID, ObjectType } from "@nestjs/graphql";

import { ROLES } from "../../../common/enums";

@Scopes(() => ({
  user: {
    attributes: {
      exclude: ["password"],
    },
  },
}))
@Table({
  tableName: "users",
  timestamps: true,
  paranoid: true,
})
@ObjectType({ description: "user" })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  @Field((type) => ID)
  id: number;

  @Unique
  @Column(DataType.STRING)
  @Field()
  email: string;

  @Unique
  @Column(DataType.STRING)
  @Field()
  name: string;

  @Unique
  @Column(DataType.STRING)
  @Field()
  username: string;

  @Column(DataType.STRING)
  @Field()
  password: string;

  @Column(DataType.ENUM(ROLES.ADMIN, ROLES.USER))
  @Field()
  role: ROLES;

  @Column(DataType.DATE)
  @Field()
  createdAt: Date;

  @Column(DataType.DATE)
  @Field()
  updatedAt: Date;

  @Column(DataType.DATE)
  @Field()
  deletedAt: Date;

  @Column(DataType.INTEGER)
  @Field()
  createdBy: number;

  @Column(DataType.INTEGER)
  @Field()
  updatedBy: number;

  @Column(DataType.INTEGER)
  @Field()
  deletedBy: number;
}
