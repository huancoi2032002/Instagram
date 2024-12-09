import React, { useEffect, useState } from "react";
import EditPost from "../CreatePosts/Component/EditPost";

interface OtherOptionsIconProps {
    onClose: () => void;
    postId: string;
}

const OtherOptionsIcon: React.FC<OtherOptionsIconProps> = ({ onClose, postId }) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(true);
    const [isEditPostVisible, setIsEditPostVisible] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false); // Kiểm tra xem người dùng có phải là tác giả không
    const userId = localStorage.getItem("userID");

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        const fetchPostDetails = async () => {
            try {
                const response = await fetch(`https://dacnbe.onrender.com/post/getOnePost?postId=${postId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Connection": "keep-alive",
                        "token": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const postData = await response.json();
                    setIsAuthor(postData.author._id === userId); // So sánh userId với author
                } else {
                    console.error("Failed to fetch post details");
                }
            } catch (error) {
                console.error("Error fetching post details:", error);
            }
        };

        fetchPostDetails();
    }, [postId, userId]);

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
                            <>
                                <button
                                    className={`w-full px-2 py-1 text-sm min-h-12 cursor-pointer ${isAuthor ? "" : "opacity-50 cursor-not-allowed"
                                        }`}
                                    onClick={isAuthor ? handleEditPost : undefined}
                                    disabled={!isAuthor}
                                >
                                    Chỉnh sửa bài viết
                                </button>
                                <button
                                    className={`w-full px-2 py-1 text-sm min-h-12 cursor-pointer ${isAuthor ? "" : "opacity-50 cursor-not-allowed"
                                        }`}
                                    onClick={isAuthor ? deletePost : undefined}
                                    disabled={!isAuthor}
                                >
                                    Xóa bài viết
                                </button>
                            </>

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
