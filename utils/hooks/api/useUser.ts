import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { User } from 'src/API';

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
            users {
              items {
                userID
                status
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
                status
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

type QueryKey = [string, { id: string; status: string }];

type QueryParams = {
  queryKey: QueryKey;
};
const getUserQuery = ({ queryKey }: QueryParams) => {
  const [_key, { id, status }] = queryKey;
  if (status) {
    return API.graphql(graphqlOperation(getUserFilter, { id, status }));
  }

  return API.graphql(graphqlOperation(getUser, { id }));
};

function useUser(id?: string, status?: string) {
  // @ts-ignore
  return useQuery(['user', { id, status }], getUserQuery, { enabled: id != null });
}

export default useUser;
