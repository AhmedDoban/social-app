import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "./Comments";

function Post({ postsITEM }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;
  return (
    <div className="post">
      {/***************    Head information ************/}
      <div className="head">
        <div className="information">
          <Link to={`profile/${postsITEM.userId}`}>
            <img src={postsITEM.profilePic} alt={postsITEM.userId} />
          </Link>
          <Link to={`profile/${postsITEM.userId}`} className="userinfo">
            <h3>{postsITEM.name}</h3>
            <p>1 min ago</p>
          </Link>
        </div>
        <button className="MoreAction">
          <MoreHorizIcon />
        </button>
      </div>
      {/***************    Content  ***************/}
      <div className="content">
        <p>{postsITEM.desc}</p>
        <img src={postsITEM.img} alt="" />
      </div>
      {/***************    Actions  ***************/}
      <div className="actions">
        <div className="item">
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          12 Likes
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon />
          12 Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
}
export default Post;
