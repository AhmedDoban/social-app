import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ HandleLogOut }) {
  const [Search, SetSearch] = useState("");
  const [Theme, SetTheme] = useState("Light");

  useEffect(() => {
    const ThemeLocal = localStorage.getItem("Theme");
    if (ThemeLocal === null) {
      localStorage.setItem("Theme", Theme);
    } else SetTheme(ThemeLocal);

    if (Theme === "Light") {
      document.documentElement.style.setProperty("--white-color", "#fff");
      document.documentElement.style.setProperty("--black-color", "#1d1d1d");
    } else {
      document.documentElement.style.setProperty("--white-color", "#1d1d1d");
      document.documentElement.style.setProperty("--black-color", "#fff");
    }
  }, [Theme]);

  const HandleTheme = (Value) => {
    SetTheme(Value);
    localStorage.setItem("Theme", Value);
  };

  return (
    <div className="Navbar">
      <div className="left">
        <div className="icon">
          <h1>Social</h1>
        </div>

        <Link to="" className="IconHandelarStyle">
          <HomeOutlinedIcon />
        </Link>

        {Theme === "Light" ? (
          <button
            onClick={() => HandleTheme("Dark")}
            className="IconHandelarStyle"
          >
            <WbSunnyOutlinedIcon />
          </button>
        ) : (
          <button
            onClick={() => HandleTheme("Light")}
            className="IconHandelarStyle"
          >
            <DarkModeOutlinedIcon />
          </button>
        )}
        <button className="IconHandelarStyle">
          <GridViewOutlinedIcon />
        </button>
      </div>
      <div className="center">
        <button className="IconHandelarStyle">
          <SearchOutlinedIcon />
        </button>
        <input
          type="search"
          value={Search}
          placeholder="Search..."
          onChange={(e) => SetSearch(e.target.value)}
        />
      </div>
      <div className="right">
        <button className="IconHandelarStyle">
          <PersonOutlineOutlinedIcon />
        </button>
        <button className="IconHandelarStyle">
          <EmailOutlinedIcon />
        </button>
        <button className="IconHandelarStyle">
          <NotificationsNoneOutlinedIcon />
        </button>
        <div className="userInfo">
          <img src={require("../../Imgs/user.jpg")} alt="" />
          <p>Ahmed Doban</p>
          <button className="IconHandelarStyle" onClick={() => HandleLogOut()}>
            <LoginOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
