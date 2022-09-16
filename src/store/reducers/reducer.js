const initialState = {
  allUsers: [
    {
      id: 1,
      email: `petlover@gmail.com`,
      username: `petlover333`,
      tag: 333,
      password: `petlover333`,
    },
    {
      id: 2,
      email: `otherpet@gmail.com`,
      username: `otherpet`,
      tag: 123,
      password: `otherpet`,
    },
  ],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case `NEW_USER_SIGN_UP`:
      return {
        ...state,
        allUsers: action.allUsers,
      };

    default:
      return state;
  }
}
