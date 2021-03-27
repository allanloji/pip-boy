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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      missions {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      missions {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      missions {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        missions {
          nextToken
          startedAt
        }
      }
      mission {
        id
        image
        title
        link
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        users {
          nextToken
          startedAt
        }
      }
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
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        missions {
          nextToken
          startedAt
        }
      }
      mission {
        id
        image
        title
        link
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        users {
          nextToken
          startedAt
        }
      }
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
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        missions {
          nextToken
          startedAt
        }
      }
      mission {
        id
        image
        title
        link
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        users {
          nextToken
          startedAt
        }
      }
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
      image
      title
      link
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      image
      title
      link
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      image
      title
      link
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      users {
        items {
          id
          userID
          missionID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
