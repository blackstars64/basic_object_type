import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ad } from "./Ad";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  email!: string;

  @Field(() => [Ad])
  @OneToMany(() => Ad, (ad) => ad.user)
  ads!: Ad[];
}
