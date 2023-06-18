import React, { useEffect, useState } from "react";
import Auth from "./screens/auth/Auth";
import Guest from "./screens/Guest/Guest";

function App() {
  const [AuthUser, SetAuthUser] = useState(false);

  useEffect(() => {}, [AuthUser]);

  if (AuthUser) return <Auth />;
  else return <Guest />;
}

export default App;
