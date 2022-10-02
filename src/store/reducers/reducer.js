import AllUsers from "../../data/allUsers.json";

const initialState = {
  allUsers: AllUsers,

  isUserActive: false,

  bookmarks: [],
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

    case `ADD_BOOKMARK`:
      return {
        ...state,
        bookmarks: action.bookmarks,
      };

    default:
      return state;
  }
}
