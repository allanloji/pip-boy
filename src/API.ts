/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  name?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  missions?: ModelUserMissionConnection,
};

export type ModelUserMissionConnection = {
  __typename: "ModelUserMissionConnection",
  items?:  Array<UserMission | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserMission = {
  __typename: "UserMission",
  id?: string,
  userID?: string,
  missionID?: string,
  status?: MissionStatus | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  user?: User,
  mission?: Mission,
};

export enum MissionStatus {
  COMPLETE = "COMPLETE",
  IN_PROGRESS = "IN_PROGRESS",
  INCOMPLETE = "INCOMPLETE",
}


export type Mission = {
  __typename: "Mission",
  id?: string,
  image?: string | null,
  title?: string,
  link?: string,
  type?: MissionType,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  users?: ModelUserMissionConnection,
};

export enum MissionType {
  MAIN = "MAIN",
  SIDE = "SIDE",
  ALLY = "ALLY",
  DAILY = "DAILY",
  EVENT = "EVENT",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateUserMissionInput = {
  id?: string | null,
  userID: string,
  missionID: string,
  status?: MissionStatus | null,
  _version?: number | null,
};

export type ModelUserMissionConditionInput = {
  userID?: ModelIDInput | null,
  missionID?: ModelIDInput | null,
  status?: ModelMissionStatusInput | null,
  and?: Array< ModelUserMissionConditionInput | null > | null,
  or?: Array< ModelUserMissionConditionInput | null > | null,
  not?: ModelUserMissionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMissionStatusInput = {
  eq?: MissionStatus | null,
  ne?: MissionStatus | null,
};

export type UpdateUserMissionInput = {
  id: string,
  userID?: string | null,
  missionID?: string | null,
  status?: MissionStatus | null,
  _version?: number | null,
};

export type DeleteUserMissionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMissionInput = {
  id?: string | null,
  image?: string | null,
  title: string,
  link: string,
  type: MissionType,
  _version?: number | null,
};

export type ModelMissionConditionInput = {
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  type?: ModelMissionTypeInput | null,
  and?: Array< ModelMissionConditionInput | null > | null,
  or?: Array< ModelMissionConditionInput | null > | null,
  not?: ModelMissionConditionInput | null,
};

export type ModelMissionTypeInput = {
  eq?: MissionType | null,
  ne?: MissionType | null,
};

export type UpdateMissionInput = {
  id: string,
  image?: string | null,
  title?: string | null,
  link?: string | null,
  type?: MissionType | null,
  _version?: number | null,
};

export type DeleteMissionInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserMissionFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  missionID?: ModelIDInput | null,
  status?: ModelMissionStatusInput | null,
  and?: Array< ModelUserMissionFilterInput | null > | null,
  or?: Array< ModelUserMissionFilterInput | null > | null,
  not?: ModelUserMissionFilterInput | null,
};

export type ModelMissionFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  type?: ModelMissionTypeInput | null,
  and?: Array< ModelMissionFilterInput | null > | null,
  or?: Array< ModelMissionFilterInput | null > | null,
  not?: ModelMissionFilterInput | null,
};

export type ModelMissionConnection = {
  __typename: "ModelMissionConnection",
  items?:  Array<Mission | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateUserMissionMutationVariables = {
  input?: CreateUserMissionInput,
  condition?: ModelUserMissionConditionInput | null,
};

export type CreateUserMissionMutation = {
  createUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type UpdateUserMissionMutationVariables = {
  input?: UpdateUserMissionInput,
  condition?: ModelUserMissionConditionInput | null,
};

export type UpdateUserMissionMutation = {
  updateUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type DeleteUserMissionMutationVariables = {
  input?: DeleteUserMissionInput,
  condition?: ModelUserMissionConditionInput | null,
};

export type DeleteUserMissionMutation = {
  deleteUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type CreateMissionMutationVariables = {
  input?: CreateMissionInput,
  condition?: ModelMissionConditionInput | null,
};

export type CreateMissionMutation = {
  createMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateMissionMutationVariables = {
  input?: UpdateMissionInput,
  condition?: ModelMissionConditionInput | null,
};

export type UpdateMissionMutation = {
  updateMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteMissionMutationVariables = {
  input?: DeleteMissionInput,
  condition?: ModelMissionConditionInput | null,
};

export type DeleteMissionMutation = {
  deleteMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserMissionQueryVariables = {
  id?: string,
};

export type GetUserMissionQuery = {
  getUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type ListUserMissionsQueryVariables = {
  filter?: ModelUserMissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserMissionsQuery = {
  listUserMissions?:  {
    __typename: "ModelUserMissionConnection",
    items?:  Array< {
      __typename: "UserMission",
      id: string,
      userID: string,
      missionID: string,
      status?: MissionStatus | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      mission:  {
        __typename: "Mission",
        id: string,
        image?: string | null,
        title: string,
        link: string,
        type: MissionType,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserMissionsQueryVariables = {
  filter?: ModelUserMissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserMissionsQuery = {
  syncUserMissions?:  {
    __typename: "ModelUserMissionConnection",
    items?:  Array< {
      __typename: "UserMission",
      id: string,
      userID: string,
      missionID: string,
      status?: MissionStatus | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      mission:  {
        __typename: "Mission",
        id: string,
        image?: string | null,
        title: string,
        link: string,
        type: MissionType,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListMissionsQueryVariables = {
  filter?: ModelMissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMissionsQuery = {
  listMissions?:  {
    __typename: "ModelMissionConnection",
    items?:  Array< {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMissionQueryVariables = {
  id?: string,
};

export type GetMissionQuery = {
  getMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncMissionsQueryVariables = {
  filter?: ModelMissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMissionsQuery = {
  syncMissions?:  {
    __typename: "ModelMissionConnection",
    items?:  Array< {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateUserMissionSubscription = {
  onCreateUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdateUserMissionSubscription = {
  onUpdateUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnDeleteUserMissionSubscription = {
  onDeleteUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    status?: MissionStatus | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      image?: string | null,
      title: string,
      link: string,
      type: MissionType,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnCreateMissionSubscription = {
  onCreateMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateMissionSubscription = {
  onUpdateMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteMissionSubscription = {
  onDeleteMission?:  {
    __typename: "Mission",
    id: string,
    image?: string | null,
    title: string,
    link: string,
    type: MissionType,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: MissionStatus | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
