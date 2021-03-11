/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        missions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMission = /* GraphQL */ `
  query GetUserMission($id: ID!) {
    getUserMission(id: $id) {
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
export const listUserMissions = /* GraphQL */ `
  query ListUserMissions(
    $filter: ModelUserMissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        missionID
        user {
          id
          name
          createdAt
          updatedAt
        }
        mission {
          id
          title
          link
          type
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMission = /* GraphQL */ `
  query GetMission($id: ID!) {
    getMission(id: $id) {
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
export const listMissions = /* GraphQL */ `
  query ListMissions(
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
