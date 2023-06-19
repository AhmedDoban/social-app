import React from "react";
import "./Home.css";
import Stories from "../Stories/Stories";
import AllPosts from "../Posts/AllPosts";

function Home() {
  return (
    <div className="Home">
      <Stories />
      <AllPosts />
    </div>
  );
}
export default Home;
