import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <AppBar>
      <nav>
        <ul>
        <li><Link to="/Navbar">Navbar</Link></li>
          <li><Link to="/">Home</Link></li>
        
          <li><Link to="/Userprofile">Userprofile</Link></li>
          <li><Link to="/Questions">Question</Link></li>
          <li><Link to="/Searchtag">searchtag</Link></li>
          <li><Link to="/Company">Company</Link></li>

        </ul>
      </nav>
      </AppBar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Userprofile" element={<Userprofile />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Searchtag" element={<Searchtag />} />
        <Route path="/Company" element={<Companys />} />

      </Routes>

      
      {/* <Navbar /> */}
      {/* <User_profile/> */}
     
    </div>
  );
}
function Apps(){
  return(
    <div>
      <AppBar>
        <div className="header">
          <Button color="inherit">stack overflow clone</Button>

          <Button color="inherit">about</Button>
          <input type="text" placeholder="search"></input>

          <Button color="inherit">login</Button>
          <Button color="inherit">sign up</Button>
        </div>
      </AppBar>
    </div>

  )
}
function Navbar() {
  const navigate=useNavigate;
  return (
    <div className="navbar">
      <Button color="inherit"onClick={()=>navigate("/Home")}>User profile</Button>
      <Button color="inherit">Questions</Button>
      <Button color="inherit">Saearchtag</Button>

      <Button color="inherit">Company</Button>
      
      {/* <User_profile /> */}
      <Apps/>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>home</h1>
      <Apps/>
    </div>

  );
}
function Userprofile(){
  return(
    <div>
    <h1>user profile</h1>
    <Apps/>
    </div>
  )
}
function Questions(){
  return(
    <div>

    
    <h1>question</h1>
    <Apps/>
    </div>
  )
}
function Searchtag(){
  return(
    <div>
      <h1>search tag</h1>
      <Apps/>
    </div>
  )
}

  function Companys(){
    return(
<div>
  <h1>company</h1>
  <Apps/>
</div>
    )
  }

export default App;
