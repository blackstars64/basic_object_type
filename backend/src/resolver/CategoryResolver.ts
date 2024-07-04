import { Resolver, Query, Arg } from "type-graphql";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

const db = AppDataSource.manager;

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return await db.find(Category);
  }

  @Query(() => Category, { nullable: true })
  async category(@Arg("id") id: number): Promise<Category | undefined> {
    if (!id) throw new Error("Category ID is required");

    const category = await db.findOneBy(Category, { id });
    if (!category) throw new Error("Category not found");

    return category;
  }
}
