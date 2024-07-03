import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Ad } from "./Ad";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  email!: string;

  @Field((type) => Ad)
  @OneToMany(() => Ad, (ad) => ad.user)
  ads!: Ad[];
}
