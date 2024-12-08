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
    options?: NotificationOptions
) => {
    if (Notification.permission === "granted") {
        new Notification(title, options);
    } else {
        console.error("Thông báo chưa được cấp quyền.");
    }
};
