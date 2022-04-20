// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

// import Header from "./components/Header";



export default function App() {


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
            </Route>
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