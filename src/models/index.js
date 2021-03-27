// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MissionType = {
  "MAIN": "MAIN",
  "SIDE": "SIDE",
  "ALLY": "ALLY",
  "DAILY": "DAILY",
  "EVENT": "EVENT"
};

const MissionStatus = {
  "COMPLETE": "COMPLETE",
  "IN_PROGRESS": "IN_PROGRESS",
  "INCOMPLETE": "INCOMPLETE"
};

const { User, UserMission, Mission } = initSchema(schema);

export {
  User,
  UserMission,
  Mission,
  MissionType,
  MissionStatus
};