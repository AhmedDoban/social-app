import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

function Guest({ SetAuthUser }) {
  return (
    <div className="Guest">
      <Routes>
        <Route path="/" element={<Login SetAuthUser={SetAuthUser} />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Guest;
