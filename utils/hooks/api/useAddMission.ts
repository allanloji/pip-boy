import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { createUserMission } from 'src/graphql/mutations';
import { CreateUserMissionInput } from 'src/API';

const createMissionMutation = (userMissionInput: CreateUserMissionInput) =>
  API.graphql(graphqlOperation(createUserMission, { input: userMissionInput }));

type Config = {
  onSettled?: () => void;
};

function useAddMission(config?: Config) {
  // @ts-ignore
  return useMutation(createMissionMutation, { ...config });
}

export default useAddMission;
