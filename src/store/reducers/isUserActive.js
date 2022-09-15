const initialState = {
  isUserActive: false,
};

export default function isUserActive(state = initialState, action) {
  switch (action.type) {
    case `TOGGLE_ACTIVE`:
      return {
        isUserActive: action.isUserActive,
      };

    default:
      return state;
  }
}
