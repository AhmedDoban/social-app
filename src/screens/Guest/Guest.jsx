import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

function Guest() {
  return (
    <div className="Guest">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Guest;
