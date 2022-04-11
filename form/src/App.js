import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

// Components
import SignUp from "./componenets/SignUp";
import Login from "./componenets/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
