import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profilepage from "./pages/profilepage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profilepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;