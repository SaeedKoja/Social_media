import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./component/Home";
import LogIn from "./component/LogIn";
import Friends from "./component/Friends";
import Profile from "./component/Profile";
import About from "./component/About";
import Notefcation from "./component/Notefcation";
import Navbar from "./component/Navbar";
import Messanger from "./component/Messanger";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Messanger" element={<Messanger />}></Route>
        <Route path="/Notefcation" element={<Notefcation />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
