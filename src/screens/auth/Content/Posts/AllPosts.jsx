import React from "react";
import { postsData } from "../../../../DummyData.js";
import "./Posts.css";
import Post from "./post/Post.jsx";

function AllPosts() {
  return (
    <div className="Posts">
      {postsData.map((post) => (
        <Post postsITEM={post} key={post.id} />
      ))}
    </div>
  );
}
export default AllPosts;
