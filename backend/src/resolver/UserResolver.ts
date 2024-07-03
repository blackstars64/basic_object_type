import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const db = AppDataSource.manager;

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return db.find(User);
  }
}
