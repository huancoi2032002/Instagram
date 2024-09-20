import { Route, Routes } from "react-router-dom";
import Profile from "./view/Profile/Profile";
import Home from "./view/Home/Home";
import Discovery from "./view/Discovery/Discovery";
import Setting from "./view/Settings/Setting";
import { Messenger } from "./view";
import Register from "./view/Register/Register";
import Login from "./view/Login/Login";

function App() {
  return (
    <>
      <Routes>
        {/*
        <Route path="/" element={<Home />} /> 
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/profile/*" element={<Profile />} /> 
        <Route path="/setting/*" element={<Setting />} />
        <Route path="/messenger" element={<Messenger />} />
        */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
