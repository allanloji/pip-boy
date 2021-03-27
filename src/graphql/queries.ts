/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserMission = /* GraphQL */ `
  query GetUserMission($id: ID!) {
    getUserMission(id: $id) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserMissions = /* GraphQL */ `
  query SyncUserMissions(
    $filter: ModelUserMissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserMissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        user {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
        }
      }
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const getMission = /* GraphQL */ `
  query GetMission($id: ID!) {
    getMission(id: $id) {
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
export const syncMissions = /* GraphQL */ `
  query SyncMissions(
    $filter: ModelMissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
