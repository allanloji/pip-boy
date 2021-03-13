import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { updateUserMission } from 'src/graphql/mutations';
import { UpdateUserMissionInput } from 'src/API';

const updateUserMissionMutation = (missionInput: UpdateUserMissionInput) =>
  API.graphql(graphqlOperation(updateUserMission, { input: missionInput }));

function useUpdateUserMission() {
  // @ts-ignore
  return useMutation(updateUserMissionMutation);
}

export default useUpdateUserMission;
