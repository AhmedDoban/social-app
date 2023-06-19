import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));

function Guest({ SetAuthUser }) {
  return (
    <div className="Guest">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Login SetAuthUser={SetAuthUser} />} />
          <Route path="Register" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default Guest;
