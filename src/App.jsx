import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";



function App() {
  return (
    <>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/property" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;