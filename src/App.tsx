import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./view/Profile/Profile";
import Home from "./view/Home/Home";
import Discovery from "./view/Discovery/Discovery";
import Setting from "./view/Settings/Setting";
import { Messenger } from "./view";
import Register from "./view/Register/Register";
import Login from "./view/Login/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    requestNotificationPermission,
    showNotification,
} from "./Hook/NotificationUtils";
import defaultAvatar from "~/assets/default-avatar.jpg";
import { useSocketData } from "./Hook/SocketContext";

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
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/profile" element={<Profile />} />{" "}
            {/* Trang cá nhân của người dùng đã đăng nhập */}
            <Route path="/profile/:userId" element={<Profile />} />{" "}
            {/* Trang cá nhân của người khác */}
            <Route path="/setting/*" element={<Setting />} />
            {/* conversations */}
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/messenger/:conversationId" element={<Messenger />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
