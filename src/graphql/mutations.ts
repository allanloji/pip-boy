/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      missions {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      missions {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      missions {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserMission = /* GraphQL */ `
  mutation CreateUserMission(
    $input: CreateUserMissionInput!
    $condition: ModelUserMissionConditionInput
  ) {
    createUserMission(input: $input, condition: $condition) {
      id
      userID
      missionID
      user {
        id
        name
        missions {
          nextToken
        }
        createdAt
        updatedAt
      }
      mission {
        id
        title
        link
        type
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMission = /* GraphQL */ `
  mutation UpdateUserMission(
    $input: UpdateUserMissionInput!
    $condition: ModelUserMissionConditionInput
  ) {
    updateUserMission(input: $input, condition: $condition) {
      id
      userID
      missionID
      user {
        id
        name
        missions {
          nextToken
        }
        createdAt
        updatedAt
      }
      mission {
        id
        title
        link
        type
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMission = /* GraphQL */ `
  mutation DeleteUserMission(
    $input: DeleteUserMissionInput!
    $condition: ModelUserMissionConditionInput
  ) {
    deleteUserMission(input: $input, condition: $condition) {
      id
      userID
      missionID
      user {
        id
        name
        missions {
          nextToken
        }
        createdAt
        updatedAt
      }
      mission {
        id
        title
        link
        type
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const createMission = /* GraphQL */ `
  mutation CreateMission(
    $input: CreateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    createMission(input: $input, condition: $condition) {
      id
      title
      link
      type
      users {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMission = /* GraphQL */ `
  mutation UpdateMission(
    $input: UpdateMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    updateMission(input: $input, condition: $condition) {
      id
      title
      link
      type
      users {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMission = /* GraphQL */ `
  mutation DeleteMission(
    $input: DeleteMissionInput!
    $condition: ModelMissionConditionInput
  ) {
    deleteMission(input: $input, condition: $condition) {
      id
      title
      link
      type
      users {
        items {
          id
          userID
          missionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
