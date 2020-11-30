import React, { useState, useEffect } from "react";
import Api from "../../services/lib";
import { setAuth } from "../../redux/actions/userActions"
import { setMembership } from "../../redux/actions/membersActions";;
import {useDispatch} from 'react-redux'


const Register = ({data}) => {
  console.log("odipo james ",data)
 
  const dispatch = useDispatch()
  function createToken() {
    localStorage.setItem("token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4MyIsImV4cCI6MTE5MzkyNjA0MzU3NjJ9.EExDjwomdi8T9iJzFFVOt4a73Yyrd5oXhWRllP0x9fUcULtLbXw_KVKbTVFq39BlWaD12H3f_Xsc4jhOuYN9iA");
  }
  useEffect(() => {
    createToken();
    // setMembership()
    dispatch(setMembership())

    const api = new Api();
    api.membership().getMembers().then((res) =>{
      console.log("here are members",res)
      

    })
    
  },[])
 
  return (
    <>
    <div>
      <span><span>Joinn developers</span></span>
    </div>
    </>
  );
};

export async function getServerSideProps() {
  
  const api = new Api();
  const response = await api.membership().getMembers();
  
  const data = await response.json()
  // const data = {data:"json",name:"sheikh"}
  return {
    props:{data:data || {} }
  };
}

export default Register;