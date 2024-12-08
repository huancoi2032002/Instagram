import React, { useState } from "react";

interface OtherOptionsIconProps {
    onClose: () => void;
    postId: string; // Thêm postId để xác định bài viết cần xóa
}

const OtherOptionsIcon: React.FC<OtherOptionsIconProps> = ({ onClose, postId }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    const deletePost = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            alert("Không tìm thấy token xác thực. Vui lòng đăng nhập lại.");
            return;
        }
        console.log(postId);
        
        try {
            const response = await fetch(`https://dacnbe.onrender.com/post/deleteOnePost?postId=${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive",
                    "token": `Bearer ${token}`, // Thay vì sử dụng "token", hãy dùng "Authorization"
                },
            });

            if (response.ok) {
                alert("Bài viết đã được xóa thành công!");
                setIsVisible(false);
                onClose();
            } else {
                const errorText = await response.text(); // Đọc chi tiết lỗi từ server
                console.error("API error:", errorText);
                alert(`Có lỗi khi xóa bài viết: ${errorText}`);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Lỗi kết nối. Không thể xóa bài viết.");
        }
    };


    return (
        isVisible && (
            <div className="w-full h-full top-0 left-0 fixed bg-black/50 z-50">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-100 h-auto bg-ig-elevated-background rounded-xl">
                        <button
                            className="w-full px-2 py-1 text-sm min-h-12 cursor-pointer"
                        >
                            Chỉnh sửa bài viết
                        </button>
                        <button
                            className="w-full px-2 py-1 text-sm min-h-12 cursor-pointer"
                            onClick={deletePost}
                        >
                            Xóa bài viết
                        </button>
                        <button
                            className="w-full px-2 py-1 text-sm min-h-12 cursor-pointer"
                            onClick={handleClose}
                        >
                            Huỷ
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default OtherOptionsIcon;
