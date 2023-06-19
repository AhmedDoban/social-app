import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Content from "./Content/Content";
import "./Auth.css";
function Auth({ SetAuthUser }) {
  /*************Logout***************** */
  const HandleLogOut = () => {
    localStorage.clear();
    SetAuthUser(false);
  };

  return (
    <div className="Auth">
      <Navbar HandleLogOut={HandleLogOut} />
      <div className="content-auth">
        <Sidebar />
        <Content />
        <Rightbar />
      </div>
    </div>
  );
}
export default Auth;
