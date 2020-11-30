import actions from "../types";
import Api from "../../services/lib";



export const setAuth = (response: any) => async (dispatch: any) => {
  try{
    const api = new Api();
     const response = await api.auth().login({email:"email@gmail.com",password:"pass"})
     dispatch({
      type:actions.SET_AUTH,
      payload: response,
    });
  } catch(error){
    // console.log(error)
  }
};



// export const getUser = (response: any) => (dispatch: any) => {
//     return dispatch({ type: actions.GET_PROFILE, payload: response });
//   };