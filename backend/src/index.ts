import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { createSchema } from "./schema";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Type } from "./entity/Type";

const initializeData = async () => {
  const type1 = Type.create({ name: "Monster" });
  await type1.save();

  const type2 = Type.create({ name: "Human" });
  await type2.save();

  const type3 = Type.create({ name: "Mage" });
  await type3.save();

  const type4 = Type.create({ name: "Sorcerer" });
  await type4.save();

  const user1 = User.create({
    name: "John Doe",
    email: "john.doe@example.com",
    type: type1,
  });
  await user1.save();

  const user2 = User.create({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    type: type2,
  });
  await user2.save();
};

const startServer = async () => {
  await AppDataSource.initialize();
  await initializeData(); // Appel de la fonction d'initialisation

  const schema = await createSchema();

  const server = new ApolloServer({ schema });

  server.listen({ port: 4000 }, () =>
    console.log("Server is running on http://localhost:4000")
  );
};

startServer();
