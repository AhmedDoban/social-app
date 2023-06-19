import React, { Suspense, useEffect, useState, lazy } from "react";
import Loading from "./Components/Loading/Loading";
const Auth = lazy(() => import("./screens/auth/Auth"));
const Guest = lazy(() => import("./screens/Guest/Guest"));
function App() {
  const [AuthUser, SetAuthUser] = useState(false);

  useEffect(() => {
    const GetUser = localStorage.getItem("Login");
    if (GetUser === null) SetAuthUser(false);
    else SetAuthUser(true);
  }, [AuthUser]);

  return (
    <React.Fragment>
      <Suspense fallback={<Loading />}>
        <div className="app">
          {AuthUser ? (
            <Auth SetAuthUser={SetAuthUser} />
          ) : (
            <Guest SetAuthUser={SetAuthUser} />
          )}
        </div>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
