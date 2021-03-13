export type User = {
  name: string;
  image: string;
  id: string;
};

export type Friend = {
  userID: string;
};

export type Mission = {
  id: string;
  mission: {
    title: string;
    link: string;
    type: string;
    users: {
      items: Friend[];
    };
  };
  status: string;
};
