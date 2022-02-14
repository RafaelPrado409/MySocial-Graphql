import { gql } from "apollo-server";

export const typeDefs = gql`
type Query {
    list: [User]
    user(_id: ID!): User
    name(name: String): User
  }
  
type Friend {
    _id: ID!
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }

type User {
    _id: ID!
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [Friend]
    greeting: String
  }
`