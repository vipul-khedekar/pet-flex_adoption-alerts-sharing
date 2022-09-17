import Pages from "./pages/Pages";
import PostUpdatePopup from "./components/PostUpdatePopup";
import CreateAlertPopup from "./components/CreateAlertPopup";

function App() {
  return (
    <div>
      <CreateAlertPopup />

      {/* <PostUpdatePopup /> */}

      <Pages />
    </div>
  );
}

export default App;
