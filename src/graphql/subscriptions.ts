/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserMission = /* GraphQL */ `
  subscription OnCreateUserMission {
    onCreateUserMission {
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
export const onUpdateUserMission = /* GraphQL */ `
  subscription OnUpdateUserMission {
    onUpdateUserMission {
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
export const onDeleteUserMission = /* GraphQL */ `
  subscription OnDeleteUserMission {
    onDeleteUserMission {
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
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission {
    onCreateMission {
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
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission {
    onUpdateMission {
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
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission {
    onDeleteMission {
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
