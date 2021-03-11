/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
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
  missions?: ModelUserMissionConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelUserMissionConnection = {
  __typename: "ModelUserMissionConnection",
  items?:  Array<UserMission | null > | null,
  nextToken?: string | null,
};

export type UserMission = {
  __typename: "UserMission",
  id?: string,
  userID?: string,
  missionID?: string,
  user?: User,
  mission?: Mission,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type Mission = {
  __typename: "Mission",
  id?: string,
  title?: string,
  link?: string,
  type?: string,
  users?: ModelUserMissionConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateUserMissionInput = {
  id?: string | null,
  userID: string,
  missionID: string,
  status?: string | null,
};

export type ModelUserMissionConditionInput = {
  userID?: ModelIDInput | null,
  missionID?: ModelIDInput | null,
  status?: ModelStringInput | null,
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

export type UpdateUserMissionInput = {
  id: string,
  userID?: string | null,
  missionID?: string | null,
  status?: string | null,
};

export type DeleteUserMissionInput = {
  id?: string | null,
};

export type CreateMissionInput = {
  id?: string | null,
  title: string,
  link: string,
  type: string,
};

export type ModelMissionConditionInput = {
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMissionConditionInput | null > | null,
  or?: Array< ModelMissionConditionInput | null > | null,
  not?: ModelMissionConditionInput | null,
};

export type UpdateMissionInput = {
  id: string,
  title?: string | null,
  link?: string | null,
  type?: string | null,
};

export type DeleteMissionInput = {
  id?: string | null,
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
};

export type ModelUserMissionFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  missionID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserMissionFilterInput | null > | null,
  or?: Array< ModelUserMissionFilterInput | null > | null,
  not?: ModelUserMissionFilterInput | null,
};

export type ModelMissionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelMissionFilterInput | null > | null,
  or?: Array< ModelMissionFilterInput | null > | null,
  not?: ModelMissionFilterInput | null,
};

export type ModelMissionConnection = {
  __typename: "ModelMissionConnection",
  items?:  Array<Mission | null > | null,
  nextToken?: string | null,
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
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
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
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
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
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
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
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
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
      user:  {
        __typename: "User",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      mission:  {
        __typename: "Mission",
        id: string,
        title: string,
        link: string,
        type: string,
        createdAt: string,
        updatedAt: string,
      },
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMissionQueryVariables = {
  id?: string,
};

export type GetMissionQuery = {
  getMission?:  {
    __typename: "Mission",
    id: string,
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    missions?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserMissionSubscription = {
  onCreateUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserMissionSubscription = {
  onUpdateUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserMissionSubscription = {
  onDeleteUserMission?:  {
    __typename: "UserMission",
    id: string,
    userID: string,
    missionID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      missions?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    mission:  {
      __typename: "Mission",
      id: string,
      title: string,
      link: string,
      type: string,
      users?:  {
        __typename: "ModelUserMissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMissionSubscription = {
  onCreateMission?:  {
    __typename: "Mission",
    id: string,
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMissionSubscription = {
  onUpdateMission?:  {
    __typename: "Mission",
    id: string,
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMissionSubscription = {
  onDeleteMission?:  {
    __typename: "Mission",
    id: string,
    title: string,
    link: string,
    type: string,
    users?:  {
      __typename: "ModelUserMissionConnection",
      items?:  Array< {
        __typename: "UserMission",
        id: string,
        userID: string,
        missionID: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
