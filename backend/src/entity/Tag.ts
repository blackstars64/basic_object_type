import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";

@Entity()
@ObjectType()
export class Tag {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Ad])
  @ManyToMany(() => Ad, (ad) => ad.tags)
  ads!: Ad[];
}
