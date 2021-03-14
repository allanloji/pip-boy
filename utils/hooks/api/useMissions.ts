import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { ModelMissionFilterInput } from 'src/API';

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
            status
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

type QueryKey = [string, { filter?: ModelMissionFilterInput }];

type QueryParams = {
  queryKey: QueryKey;
};

const getMissions = ({ queryKey }: QueryParams) => {
  const [_key, { filter }] = queryKey;
  if (filter && Object.keys(filter).length > 0) {
    return API.graphql(graphqlOperation(listMissions, { filter }));
  }
  return API.graphql(graphqlOperation(listMissions));
};

interface UseMissionsParams {
  filter?: ModelMissionFilterInput;
}

function useMissions({ filter }: UseMissionsParams) {
  // @ts-ignore
  return useQuery(['missions', { filter }], getMissions);
}

export default useMissions;
