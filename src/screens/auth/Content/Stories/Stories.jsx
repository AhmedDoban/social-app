import React from "react";
import { StoriesData } from "./../../../../DummyData.js";
import "./Stories.css";

function Stories() {
  return (
    <div className="Stories">
      <div className="story">
        <img src={require("../../../../Imgs/user.jpg")} alt="User" />
        <button className="AddNewStory">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {StoriesData.slice(0, 4).map((stores) => (
        <div className="story" key={stores.id}>
          <img src={stores.img} alt={stores.name} />
          <span>{stores.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Stories;
