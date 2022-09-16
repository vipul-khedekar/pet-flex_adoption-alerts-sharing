import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Signup from "./Signup";
import Landing from "./Landing";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;
