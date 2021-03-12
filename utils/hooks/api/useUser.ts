import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      missions {
        items {
          id
          status
          mission {
            title
            link
            id
            type
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

const getUserFilter = /* GraphQL */ `
  query GetUser($id: ID!, $status: String) {
    getUser(id: $id) {
      id
      name
      missions(filter: { status: { eq: $status } }) {
        items {
          id
          status
          mission {
            title
            link
            id
            type
            users {
              items {
                userID
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

const getUserQuery = ({ queryKey }): any => {
  const [_key, { id, status }] = queryKey;
  if (status) {
    return API.graphql(graphqlOperation(getUserFilter, { id, status }));
  }

  return API.graphql(graphqlOperation(getUser, { id }));
};

function useUser(id: string, status?: string) {
  return useQuery(['user', { id, status }], getUserQuery, { enabled: id != null });
}

export default useUser;
