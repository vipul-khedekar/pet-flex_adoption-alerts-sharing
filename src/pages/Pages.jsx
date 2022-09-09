import { Routes, Route } from "react";

import Home from "./Home";
import Login from "./Login";
import Error from "./Error";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;
