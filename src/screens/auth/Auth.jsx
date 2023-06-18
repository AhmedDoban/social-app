import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Auth.css"
function Auth({ SetAuthUser }) {
  /*************Logout***************** */
  const HandleLogOut = () => {
    localStorage.clear();
    SetAuthUser(false);
  };

  return (
    <div className="Auth">
      <Navbar HandleLogOut={HandleLogOut} />
      <Sidebar />
    </div>
  );
}
export default Auth;
