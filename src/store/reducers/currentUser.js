const initialState = {
  currentUser: {},
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case `UPDATE_CURRENT_USER`:
      return {
        currentUser: action.currentUser,
      };

    default:
      return state;
  }
}
