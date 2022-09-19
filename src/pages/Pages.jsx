import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Signup from "./Signup";
import Landing from "./Landing";
import PostUpdatePopup from "../components/PostUpdatePopup";
import CreateAlertPopup from "../components/CreateAlertPopup";
import CommentsPopup from "../components/CommentsPopup";

function Pages() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/home/create-post"} element={<PostUpdatePopup />} />
      <Route path={"/home/create-alert"} element={<CreateAlertPopup />} />
      <Route
        path={"/home/post/:mediaLink/comments"}
        element={<CommentsPopup />}
      />
      <Route path={"/*"} element={<Error />} />
    </Routes>
  );
}

export default Pages;
