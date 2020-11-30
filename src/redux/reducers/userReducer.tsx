import actions from "../types";

export default (state = {name:"bashir"}, action: any) => {
  switch (action.type) {
    case actions.SET_AUTH:
      return { ...state, user: action.payload };

    case actions.GET_PROFILE:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};