import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

function Content() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
export default Content;
