import { Route, Routes } from "react-router-dom";
import Profile from "./view/Profile/Profile";
import Home from "./view/Home/Home";
import Discovery from "./view/Discovery/Discovery";
import Setting from "./view/Settings/Setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Add the trailing "*" */}
        <Route path="/setting/*" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
