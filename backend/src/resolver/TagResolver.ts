import { Resolver, Query, Arg } from "type-graphql";
import { Tag } from "../entity/Tag";
import { AppDataSource } from "../data-source";

const db = AppDataSource.manager;

@Resolver()
export class TagResolver {
  @Query(() => [Tag])
  async tags(): Promise<Tag[]> {
    return await db.find(Tag);
  }

  @Query(() => Tag, { nullable: true })
  async tag(@Arg("id") id: number): Promise<Tag | undefined> {
    const tag = await db.findOneBy(Tag, { id });
    if (!tag) throw new Error("Tag not found");
    return tag;
  }
}
