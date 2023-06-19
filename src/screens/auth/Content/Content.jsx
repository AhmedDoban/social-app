import React, { useEffect, useRef } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

function Content() {
  const BacktoTop = useRef();
  const HandleToTheTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY >= 150) {
        BacktoTop.current.style.cssText = "display : flex";
      } else {
        BacktoTop.current.style.cssText = "display : none";
      }
    };
  }, [BacktoTop]);
  return (
    <React.Fragment>
      <i
        className="fas fa-arrow-up back-to-top"
        onClick={() => HandleToTheTop()}
        ref={BacktoTop}
        style={{ display: "none" }}
      />
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
