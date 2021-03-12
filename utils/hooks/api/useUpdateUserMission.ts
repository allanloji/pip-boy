import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { updateUserMission } from '../../../src/graphql/mutations';
// eslint-disable-next-line import/extensions
import { UpdateUserMissionInput } from '../../../src/API';

const updateUserMissionMutation = (missionInput: UpdateUserMissionInput) =>
  API.graphql(graphqlOperation(updateUserMission, { input: missionInput }));

function useUpdateUserMission() {
  return useMutation(updateUserMissionMutation);
}

export default useUpdateUserMission;
