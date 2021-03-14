import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

const listMissions = /* GraphQL */ `
  query ListMissions($filter: ModelMissionFilterInput, $limit: Int, $nextToken: String) {
    listMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        type
        users {
          items {
            userID
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const getMissions = (): any => API.graphql(graphqlOperation(listMissions));

function useMissions() {
  return useQuery('missions', getMissions);
}

export default useMissions;
