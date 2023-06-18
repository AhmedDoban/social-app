import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="menu">
        <div className="data">
          <img src={require("../../Imgs/user.jpg")} alt="" />
          <p>Ahmed Doban</p>
        </div>
        <div className="data">
          <img src={require("../../Imgs/1.png")} alt="" />
          <span>Friends</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/2.png")} alt="" />
          <span>Groups</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/3.png")} alt="" />
          <span>Marketplace</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/4.png")} alt="" />
          <span>Watch</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/5.png")} alt="" />
          <span>Memories</span>
        </div>
      </div>
      <div className="menu">
        <span>Your shortcuts</span>
        <div className="data">
          <img src={require("../../Imgs/6.png")} alt="" />
          <span>Events</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/7.png")} alt="" />
          <span>Gaming</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/8.png")} alt="" />
          <span>Gallery</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/9.png")} alt="" />
          <span>Videos</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/10.png")} alt="" />
          <span>Messages</span>
        </div>
      </div>
      <div className="menu">
        <span>Others</span>
        <div className="data">
          <img src={require("../../Imgs/11.png")} alt="" />
          <span>Fundraiser</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/12.png")} alt="" />
          <span>Tutorials</span>
        </div>
        <div className="data">
          <img src={require("../../Imgs/13.png")} alt="" />
          <span>Courses</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
