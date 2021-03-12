import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { createUserMission } from '../../../src/graphql/mutations';
// eslint-disable-next-line import/extensions
import { CreateUserMissionInput } from '../../../src/API';

const createMissionMutation = (userMissionInput: CreateUserMissionInput) =>
  API.graphql(graphqlOperation(createUserMission, { input: userMissionInput }));

function useAddMission() {
  return useMutation(createMissionMutation);
}

export default useAddMission;
