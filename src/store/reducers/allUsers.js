const initialState = {
  allUsers: [
    {
      id: 1,
      name: `Mr. Pet Lover`,
      username: `petlover333`,
      email: `petlover@gmail.com`,
      password: `petlover333`,
    },
  ],
};

export default function reducer(state = initialState, action) {
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
