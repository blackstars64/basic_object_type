import "reflect-metadata";
import { UserResolver } from "./resolver/UserResolver";
import { buildSchema } from "type-graphql";

export const createSchema = async () => {
  return buildSchema({
    resolvers: [UserResolver],
    validate: false,
  });
};
