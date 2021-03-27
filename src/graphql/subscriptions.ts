/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserMission = /* GraphQL */ `
  subscription OnCreateUserMission {
    onCreateUserMission {
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
export const onUpdateUserMission = /* GraphQL */ `
  subscription OnUpdateUserMission {
    onUpdateUserMission {
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
export const onDeleteUserMission = /* GraphQL */ `
  subscription OnDeleteUserMission {
    onDeleteUserMission {
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
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission {
    onCreateMission {
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
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission {
    onUpdateMission {
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
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission {
    onDeleteMission {
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
