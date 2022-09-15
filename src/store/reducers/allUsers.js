const initialState = {
  allUsers: [],
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
