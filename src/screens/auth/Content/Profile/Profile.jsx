import React from "react";
import "./Profile.css";
import AllPosts from "./../Posts/AllPosts";
function Profile() {
  return (
    <div className="Profile">
      {/********************* Cover ************************* */}
      <div className="cover">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover"
        />
        <div className="user-profile-pic">
          <img src={require("../../../../Imgs/user.jpg")} alt="profilePic" />
        </div>
      </div>
      {/********************* Informationm  ************************* */}
      <div className="Informationm">
        <div className="content">
          <h1>Ahmed Doban</h1>
          {/********************Social*******************/}
          <div className="social">
            <a href="">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="">
              <i className="fa-brands fa-github" />
            </a>
          </div>
          {/******************** other -  info*******************/}
          <div className="other-info">
            <p>
              <i className="fa-solid fa-location-dot" />
              <span>Cairo</span>
            </p>
            <p>
              <i className="fa-solid fa-earth-americas" />
              <span>Egypt</span>
            </p>
          </div>
          {/******************** other -  info*******************/}
          <div className="other-info">
            <p>
              <i className="fa-regular fa-envelope"></i>
            </p>
            <button>Follow</button>
            <p>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </p>
          </div>
        </div>
      </div>
      {/********************* Posts  ************************* */}
      <AllPosts />
    </div>
  );
}
export default Profile;
