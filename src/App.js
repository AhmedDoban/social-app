import React, { useEffect, useState } from "react";
import Auth from "./screens/auth/Auth";
import Guest from "./screens/Guest/Guest";

function App() {
  const [AuthUser, SetAuthUser] = useState(false);

  useEffect(() => {
    const GetUser = localStorage.getItem("Login");
    if (GetUser === null) SetAuthUser(false);
    else SetAuthUser(true);
  }, [AuthUser]);

  return (
    <React.Fragment>
      <div className="app">
        {AuthUser ? (
          <Auth SetAuthUser={SetAuthUser} />
        ) : (
          <Guest SetAuthUser={SetAuthUser} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
