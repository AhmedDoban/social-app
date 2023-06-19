import React from "react";
import { commentsData } from "../../../../../DummyData.js";

export default function Comments() {
  return (
    <div className="comments">
      <div className="newComment">
        <img src={require("../../../../../Imgs/user.jpg")} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {commentsData.map((comment) => (
        <div className="box">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}
