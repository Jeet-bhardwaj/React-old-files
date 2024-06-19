import React, { useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const {username, setusername} = useState("");
    const {password, setpassword} = useState("");

//     const handilOnChangeUser = (e) => {
//       console.log(e);
//     };
//     const handilOnChangePass = (e) => {
//       console.log(e);
//     };
//     const handilOnSubmit = (e) => {
//       console.log(e);
//     }; 

  return (
    <>
      <div>
        <h1>UserName</h1>
        <input onChange = { (e) =>handilOnChangeUser(e.target.value)} type="text" placeholder="UserName" />
        <h1>Password</h1>
        <input onChange = { (e) =>handilOnChangePass(e.target.value)} type="password" placeholder="Password" />
        <button onClick={(e)=>handilOnSubmit(e.target.valu)}>Login</button>
      </div>
    </>
  );
};
export default Login;
