import { ApolloServer } from "apollo-server-express";

const catalogs = [
  {
    id: 1,
    key: "woman",
    name: "Woman",
  },
  {
    id: 2,
    key: "man",
    name: "Man",
  },
  {
    id: 2,
    key: "kids",
    name: "Kids",
  },
];

const schema = `
  type Query { catalogs: [Catalogs] }
  type Catalogs { id: ID, key: String, name: String }
`;

const resolvers = {
  Query: { catalogs: () => catalogs },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

export default server;
