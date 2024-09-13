import { Route, Routes } from "react-router-dom";
import Profile from "./view/Profile/Profile";
import Home from "./view/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Add the trailing "*" */}
      </Routes>
    </>
  );
}

export default App;
