import allUsers from "../../data/allUsers.json";

const initialState = {
  allUsers: allUsers,

  isUserActive: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case `NEW_USER_SIGN_UP`:
      return {
        ...state,
        allUsers: action.allUsers,
      };

    case `TOGGLE_ACTIVE`:
      return {
        ...state,
        isUserActive: action.isUserActive,
      };

    default:
      return state;
  }
}
