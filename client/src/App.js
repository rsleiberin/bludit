// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext, createContext, useState } from "react";

import Home from "./pages/Home";
  import LogIn from "./components/LogIn";
  import SignUp from "./components/SignUp";

import NewPost from "./pages/NewPost";
import { useEffect } from "react";


export default function App() {
  const [currentUser,setCurrentUser] = useState('');

  useEffect( ()=> {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  })

  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home currentUser={currentUser}/>} >
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<LogIn />} />
              </Route>
              <Route path='submit' element={<NewPost />}/>
          </Routes>
      </Router>
  )
}

/* Routes
baseurl/ (home)
./signup
./login
./subBludits
*/