import { useSelector } from "react-redux";

import Home from "./Home";
import Login from "./Login";

function Landing() {
  const isUserActive = useSelector((state) => state.isUserActive);

  return <>{isUserActive ? <Home /> : <Login />}</>;
}

export default Landing;
