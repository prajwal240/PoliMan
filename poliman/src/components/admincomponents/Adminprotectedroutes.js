import React, { useContext } from 'react';
import { AdminauthenticateContext } from "../globalstates/Adminauthenticate";
import { Outlet,Navigate } from "react-router-dom";

export default function Adminprotectedroutes() {
    const {status}=useContext(AdminauthenticateContext);
  return (
    status ? <Outlet/>:<Navigate to="/"/>
  )
}
