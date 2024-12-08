import { NavigateFunction } from "react-router-dom";

export const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
        alert("Trình duyệt của bạn không hỗ trợ thông báo.");
        return false;
    }

    const permission = await Notification.requestPermission();
    return permission === "granted";
};

export const showNotification = (
    title: string,
    url: string,
    navigate: NavigateFunction,
    options?: NotificationOptions
) => {
    if (Notification.permission === "granted") {
        const newNoti = new Notification(title, options);
        newNoti.onclick = () => {
            window.focus(); // Đảm bảo ứng dụng được focus
            navigate(url);
        };
    } else {
        console.error("Thông báo chưa được cấp quyền.");
    }
};
