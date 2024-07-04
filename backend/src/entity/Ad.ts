import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";
import { Category } from "./Category";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Ad {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  price!: number;

  @Field()
  @Column()
  image!: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.ads)
  user!: User;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads)
  category!: Category;

  @Field(() => [Tag])
  @ManyToMany(() => Tag)
  @JoinTable()
  tags!: Tag[];

  @Field()
  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date;

  @Field()
  @UpdateDateColumn({ type: "datetime" })
  updatedAt!: Date;
}
