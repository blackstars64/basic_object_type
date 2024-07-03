import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../entity/User";
import { Type } from "../entity/Type";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return User.find({ relations: ["type"] });
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("typeId") typeId: number
  ): Promise<User> {
    const type = await Type.findOne({ where: { id: typeId } });
    if (!type) throw new Error("Type not found");

    const user = User.create({ name, email, type });
    await user.save();
    return user;
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Arg("id") id: number,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("email", { nullable: true }) email?: string,
    @Arg("typeId", { nullable: true }) typeId?: number
  ): Promise<User | null> {
    const user = await User.findOne({ where: { id }, relations: ["type"] });
    if (!user) return null;

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (typeId !== undefined) {
      const type = await Type.findOne({ where: { id: typeId } });
      if (!type) throw new Error("Type not found");
      user.type = type;
    }

    await user.save();
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number): Promise<boolean> {
    const user = await User.findOne({ where: { id }, relations: ["type"] });
    if (!user) return false;

    await user.remove();
    return true;
  }
}
