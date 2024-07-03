import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolver/UserResolver";
import { TypeResolver } from "./resolver/TypeResolver";

export const createSchema = async () => {
  return buildSchema({
    resolvers: [UserResolver, TypeResolver],
    validate: false,
  });
};
