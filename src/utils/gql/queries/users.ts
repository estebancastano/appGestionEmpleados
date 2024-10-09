import { gql } from 'apollo-server-micro';

const GET_USERS = gql`
  query Query {
    users {
      role
      name
      image
      id
      email
    }
  }
`;

export { GET_USERS };
