import { gql } from "@apollo/client/core";

const CURRENT_USER_QUERY = gql`
query me {
    me {
      name
      surname
    }
  }
`;

export default CURRENT_USER_QUERY;
