import { useQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { listMissions } from 'src/graphql/queries';

const getMissions = (): any => API.graphql(graphqlOperation(listMissions));

function useMissions() {
  return useQuery('missions', getMissions);
}

export default useMissions;
