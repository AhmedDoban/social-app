import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ SetAuthUser }) {
  const HandleLogin = () => {
    localStorage.setItem("Login", true);
    SetAuthUser(true);
  };

  return (
    <div className="Login">
      <div className="card">
        {/********************** Left ******************************* */}
        <div className="left">
          <h1>Hello.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/Register">Register</Link>
        </div>
        {/********************** Right ******************************* */}
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={() => HandleLogin()}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
