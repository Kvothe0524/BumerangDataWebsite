import {gql} from '@apollo/client/core';

const LOGIN_MUTATION = gql`
 mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        name
        role
        email
      }
 }
`;

export default LOGIN_MUTATION;