// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext, createContext, useState } from "react";

import Home from "./pages/Home";
  import LogIn from "./components/LogIn";
  import SignUp from "./components/SignUp";

import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import { useEffect } from "react";


export default function App() {
  const [currentUser,setCurrentUser] = useState('');
  const [postObject, setPostObject] = useState({})

  const setUser = (userId) => {
    setCurrentUser(userId)
  }

  // const setPost = (data) => {
  //   setPostObject(data)
  // }

  useEffect( ()=> {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home currentUser={currentUser} setUser={setUser}/>} >
                  <Route path="signup" element={<SignUp setUser={setUser}/>} />
                  <Route path="login" element={<LogIn setUser={setUser}/>} />
              </Route>
              
              <Route path='submit' element={<NewPost currentUser={currentUser} setUser={setUser} setPostObject={setPostObject}/>}/>
              <Route path="posts" element={<Post currentUser={currentUser} setUser={setUser} postObject={postObject}/>} />
              <Route path='edit' element={<EditPost setPostObject={setPostObject} currentUser={currentUser} postObject={postObject}/>}/>
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