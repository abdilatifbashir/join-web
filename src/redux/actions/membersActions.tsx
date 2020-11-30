import actions from "../types";
import Api from "../../services/lib";



export const setMembership = () => (dispatch: any) => {
  // try{
  //   const api = new Api();
  //    const response = await api.membership().getMembers()
  //    console.log("pagani",response)
  //    dispatch({
  //     type:actions.SET_MEMBERSHIP,
  //     payload: response,
  //   });
  // } catch(error){
  //   // console.log(error)
  // }
  const api = new Api();
  api.membership().getMembers().then((response) => {
    dispatch({
          type:actions.SET_MEMBERSHIP,
          payload: response,
       })
  }).catch((error) =>{
    console.log(error)
  })
};