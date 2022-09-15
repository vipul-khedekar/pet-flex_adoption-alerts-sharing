import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Error from "./Error";
import Signup from "./Signup";
import Landing from "./Landing";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/home"} element={<Home />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;
