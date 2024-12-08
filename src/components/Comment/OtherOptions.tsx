import React, { useState } from "react";
import EditPost from "../CreatePosts/Component/EditPost";

interface OtherOptionsIconProps {
    onClose: () => void;
    postId: string;
}

const OtherOptionsIcon: React.FC<OtherOptionsIconProps> = ({ onClose, postId }) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(true);
    const [isEditPostVisible, setIsEditPostVisible] = useState(false);

    const handleClose = () => {
        setIsOptionsVisible(false);
        onClose();
    };

    const deletePost = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            alert("Không tìm thấy token xác thực. Vui lòng đăng nhập lại.");
            return;
        }

        try {
            const response = await fetch(`https://dacnbe.onrender.com/post/deleteOnePost?postId=${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive",
                    "token": `Bearer ${token}`,
                },
            });

            if (response.ok) {
                alert("Bài viết đã được xóa thành công!");
                setIsOptionsVisible(false);
                onClose();
            } else {
                const errorText = await response.text();
                console.error("API error:", errorText);
                alert(`Có lỗi khi xóa bài viết: ${errorText}`);
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Lỗi kết nối. Không thể xóa bài viết.");
        }
    };

    const handleEditPost = () => {
        setIsOptionsVisible(false); // Ẩn giao diện tùy chọn
        setIsEditPostVisible(true); // Hiển thị giao diện chỉnh sửa bài viết
    };

    return (
        <>
            {isOptionsVisible && (
                <div className="w-full h-full top-0 left-0 fixed bg-black/50 z-50">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-100 h-auto bg-ig-elevated-background rounded-xl">
                            <button
                                className="w-full px-2 py-1 text-sm min-h-12 cursor-pointer"
                                onClick={handleEditPost}
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
            )}

            {isEditPostVisible && (
                <EditPost
                    postId={postId}
                    onClose={() => {
                        setIsEditPostVisible(false);
                        onClose(); // Gọi hàm đóng nếu cần
                    }}
                />
            )}
        </>
    );
};

export default OtherOptionsIcon;
