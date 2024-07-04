import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const db = AppDataSource.manager;

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await db.find(User, {
      relations: ["ads", "ads.category", "ads.tags"],
    });
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string
  ): Promise<User> {
    const user = db.create(User, { name, email });
    await db.save(user);
    return user;
  }
}
