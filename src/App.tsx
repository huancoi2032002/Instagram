import { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import {
  requestNotificationPermission,
  showNotification,
} from "./Hook/NotificationUtils";
import defaultAvatar from "~/assets/default-avatar.jpg";
import { useSocketData } from "./Hook/SocketContext";
import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import Register from "./view/Register/Register";
import Discovery from "./view/Discovery/Discovery";
import Messenger from "./view/Messenger/Messenger";
import Profile from "./view/Profile/Profile";
import Setting from "./view/Settings/Setting";
import ProtectedRoute from "./routes/ProtectedRouteProps";
import ProfileFriends from "./view/Profile/ProfileFriends";

function App() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const loggedInUserId =
    localStorage.getItem("userID") || "6739d6501910d4b22d21a29b";
  const { receiveMessageData } = useSocketData();

  // noti
  useEffect(() => {
    if (
      receiveMessageData &&
      receiveMessageData.sender._id !== loggedInUserId &&
      !location.includes("messenger")
    ) {
      showNotification(
        `${receiveMessageData.sender.fullname} vừa nhắn`,
        `/messenger/${receiveMessageData.conversation}`,
        navigate,
        {
          body:
            receiveMessageData.content ||
            receiveMessageData.sender.fullname +
            " đã gửi 1 tin nhắn.",
          icon: receiveMessageData.sender.avatar || defaultAvatar,
        }
      );
    }
  }, [receiveMessageData]);

  useEffect(() => {
    // Yêu cầu quyền hiển thị thông báo khi ứng dụng khởi chạy
    const askPermission = async () => {
      await requestNotificationPermission();
    };
    askPermission();
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoute isAuthenticated={!!loggedInUserId}><Home /></ProtectedRoute>} />
      <Route path="/" element={<ProtectedRoute isAuthenticated={!!loggedInUserId}><Login /></ProtectedRoute>} />
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
        path="/messenger/:conversationId"
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
}

export default App;