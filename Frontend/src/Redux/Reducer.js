export const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default: {
      return {};
    }
  }
};
