import actions from "../types";

export default (state = {name:"bashir"}, action: any) => {
  switch (action.type) {
    case actions.SET_MEMBERSHIP:
      return { ...state, members: action.payload };
      
    default:
      return state;
  }
};