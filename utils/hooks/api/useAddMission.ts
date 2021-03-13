import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { createUserMission } from 'src/graphql/mutations';
import { CreateUserMissionInput } from 'src/API';

const createMissionMutation = (userMissionInput: CreateUserMissionInput) =>
  API.graphql(graphqlOperation(createUserMission, { input: userMissionInput }));

function useAddMission() {
  // @ts-ignore
  return useMutation(createMissionMutation);
}

export default useAddMission;
