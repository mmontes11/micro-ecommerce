import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import storage from "../storage";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { storage },
});

export default server;
