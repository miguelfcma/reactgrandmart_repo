import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/HomePage"
//import { Home } from "../components/Home/Home";


import { auth } from "../data/firebase.jsx";

import { useState } from "react";
import { useEffect } from "react";

export function MyRoutes() {
 const [userName,setUserName]=useState([])
 useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else setUserName("")
  })
 },[])
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}
