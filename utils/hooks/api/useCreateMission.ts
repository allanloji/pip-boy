import { useMutation } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';

import { createMission } from '../../../src/graphql/mutations';
// eslint-disable-next-line import/extensions
import { CreateMissionInput } from '../../../src/API';

const createMissionMutation = (missionInput: CreateMissionInput) =>
  API.graphql(graphqlOperation(createMission, { input: missionInput }));

function useCreateMission() {
  return useMutation(createMissionMutation);
}

export default useCreateMission;
