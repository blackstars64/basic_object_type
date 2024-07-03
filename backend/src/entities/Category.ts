import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name?: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  @Field((type) => [Ad])
  ads?: Promise<Ad[]>;

  constructor(name: string = "") {
    this.name = name;
  }
}
