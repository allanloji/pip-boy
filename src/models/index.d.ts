import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum MissionType {
  MAIN = "MAIN",
  SIDE = "SIDE",
  ALLY = "ALLY",
  DAILY = "DAILY",
  EVENT = "EVENT"
}

export enum MissionStatus {
  COMPLETE = "COMPLETE",
  IN_PROGRESS = "IN_PROGRESS",
  INCOMPLETE = "INCOMPLETE"
}



export declare class User {
  readonly id: string;
  readonly name: string;
  readonly missions?: (UserMission | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class UserMission {
  readonly id: string;
  readonly user: User;
  readonly mission: Mission;
  readonly status?: MissionStatus | keyof typeof MissionStatus;
  constructor(init: ModelInit<UserMission>);
  static copyOf(source: UserMission, mutator: (draft: MutableModel<UserMission>) => MutableModel<UserMission> | void): UserMission;
}

export declare class Mission {
  readonly id: string;
  readonly image?: string;
  readonly title: string;
  readonly link: string;
  readonly type: MissionType | keyof typeof MissionType;
  readonly users?: (UserMission | null)[];
  constructor(init: ModelInit<Mission>);
  static copyOf(source: Mission, mutator: (draft: MutableModel<Mission>) => MutableModel<Mission> | void): Mission;
}