import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Signup from "./Signup";
import Landing from "./Landing";
import Bookmarks from "./Bookmarks";
import Notifications from "./Notifications";
import PostUpdatePopup from "../components/PostUpdatePopup";
import CreateAlertPopup from "../components/CreateAlertPopup";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/home/create-post"} element={<PostUpdatePopup />} />
      <Route path={"/home/create-alert"} element={<CreateAlertPopup />} />
      <Route path={"/bookmarks"} element={<Bookmarks />} />
      <Route path={"/notifications"} element={<Notifications />} />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;
