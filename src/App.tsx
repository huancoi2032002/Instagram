import { Route, Routes } from "react-router-dom";
import Profile from "./view/Profile/Profile";
import Home from "./view/Home/Home";
import Discovery from "./view/Discovery/Discovery";
import Setting from "./view/Settings/Setting";
import { Messenger } from "./view";
import Register from "./view/Register/Register";
import Login from "./view/Login/Login";
import { useEffect } from "react";
import {
    requestNotificationPermission,
    showNotification,
} from "./Hook/NotificationUtils";
import defaultAvatar from "~/assets/default-avatar.jpg";

interface Message {
    content: string;
    sender: string;
}

function App() {
    useEffect(() => {
        // Yêu cầu quyền hiển thị thông báo khi ứng dụng khởi chạy
        const askPermission = async () => {
            await requestNotificationPermission();
        };
        askPermission();
    }, []);

    const handleShowNotification = () => {
        // Hiển thị thông báo
        showNotification("Thông báo mới!", {
            body: "Hãy kiểm tra thông tin cập nhật ngay bây giờ.",
            icon: defaultAvatar, // Link tới ảnh đại diện
        });
    };

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
