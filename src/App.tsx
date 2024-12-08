import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";
import Discovery from "./view/Discovery/Discovery";
import Profile from "./view/Profile/Profile";
import Setting from "./view/Settings/Setting";
import Messenger from "./view/Messenger/Messenger";
import Register from "./view/Register/Register";
import Login from "./view/Login/Login";
import ProtectedRoute from "./routes/ProtectedRouteProps";
import ProfileFriends from "./view/Profile/ProfileFriends";

const AppRoutes: React.FC = () => {
  const loggedInUserId = localStorage.getItem("userID")?.trim(); // Lấy userId

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute isAuthenticated={!!loggedInUserId}><Home /></ProtectedRoute>} />
      <Route path="/discovery" element={<ProtectedRoute isAuthenticated={!!loggedInUserId}><Discovery /></ProtectedRoute>} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={!!loggedInUserId}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:userId"
        element={
          <ProtectedRoute isAuthenticated={!!loggedInUserId}>
            <ProfileFriends />
          </ProtectedRoute>
        }
      />
      <Route
        path="/setting/*"
        element={
          <ProtectedRoute isAuthenticated={!!loggedInUserId}>
            <Setting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messenger"
        element={
          <ProtectedRoute isAuthenticated={!!loggedInUserId}>
            <Messenger />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
