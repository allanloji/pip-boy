import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { updateUserMission } from 'src/graphql/mutations';
import { UpdateUserMissionInput } from 'src/API';

const updateUserMissionMutation = (missionInput: UpdateUserMissionInput) =>
  API.graphql(graphqlOperation(updateUserMission, { input: missionInput }));

type Config = {
  onSettled?: () => void;
};

function useUpdateUserMission(config?: Config) {
  // @ts-ignore
  return useMutation(updateUserMissionMutation, { ...config });
}

export default useUpdateUserMission;
