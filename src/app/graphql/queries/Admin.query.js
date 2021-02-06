import {gql} from '@apollo/client/core';

const ADMIN_QUERY = gql`
 query Admins {
    admin(id: 1){
        id
        name
        surname
        role
        email
        createdAt
        updatedAt
      }
 }
`;

export default ADMIN_QUERY;

