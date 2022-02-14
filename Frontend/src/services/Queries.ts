import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query GetUsers {
      list {
        _id
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
`;

export const MY_USER_QUERY = gql`
  query GetUser($id: ID!) {
    user(_id: $id) {
      picture
      age
      eyeColor
      name
      company
      email
      friends {
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
  }
`;
