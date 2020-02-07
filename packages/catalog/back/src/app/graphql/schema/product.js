import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    products(categoryId: ID, categoryKey: String, page: PageInput!): PagedResult!
  }

  type Price {
    cents: Int!
    currency: String!
  }

  type Image {
    id: ID!
    url: String!
    location: String!
  }

  type Size {
    id: ID!
    sku: String!
    name: String!
    price: Price!
  }

  type Color {
    id: ID!
    key: String!
    name: String!
    images: [Image]!
    sizes: [Size]!
  }

  type Product {
    id: ID!
    key: String!
    name: String!
    brand: String!
    colors: [Color]!
  }
`;
