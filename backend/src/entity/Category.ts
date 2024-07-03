import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";

@Entity()
@ObjectType()
export class Category {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => Ad)
  @OneToMany(() => Ad, (ad) => ad.category)
  ads!: Ad[];
}
