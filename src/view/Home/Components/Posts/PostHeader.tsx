import React, { useState, useEffect } from "react";
import { OtherOptionsIcon } from "~/assets";
import OnclickText from "~/components/OnclickText/OnclickText";
import NotificationPost from "../NotificationPost/NotificationPost";
import { formatDateDifference } from "~/store/format/formatDateDifference";
import useFollowUser from "~/Hook/useFollowUser";
import { useNavigate } from "react-router-dom";

interface PostHeaderProps {
    username: string;
    avatar: string;
    createdAt: string;
    _id: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, avatar, createdAt, _id }) => {
    const [isShowNotificationPost, setIsShowNotificationPost] = useState(false);
    const [formattedDate, setFormattedDate] = useState<string>("");
    const navigate = useNavigate();  // Call useNavigate as a function

    const userId = localStorage.getItem("userID"); // Lấy userId từ localStorage
    const { isFollowing, followUser, loading, error } = useFollowUser(); // Sử dụng custom hook

    const handleShowNotificationPost = () => {
        setIsShowNotificationPost(prev => !prev);
    };

    useEffect(() => {
        const formattedDate = formatDateDifference(createdAt);
        setFormattedDate(formattedDate);
    }, [createdAt]);

    const handleNavigateToProfile = () => {
        navigate(`/profile/${_id}`); // Correctly use navigate
    };

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2" onClick={handleNavigateToProfile}>
                <img
                    src={avatar}
                    alt="user profile pic"
                    className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="flex items-center text-xs font-bold gap-1">
                    <div className="cursor-pointer">{username}</div>
                    <span className="text-gray-600 font-medium">{formattedDate}</span>
                    {userId !== _id && (
                        <span className="text-gray-600 font-medium flex items-center gap-1">
                            •
                            <OnclickText
                                initialLabel={isFollowing ? "Đang theo dõi" : "Theo dõi"}
                                activeLabel={isFollowing ? "Đang theo dõi" : "Theo dõi"}
                                onClick={() => followUser(userId, _id)} // Thực thi followUser khi click
                            />
                        </span>
                    )}
                </div>
            </div>
            <div className="cursor-pointer" onClick={handleShowNotificationPost}>
                <OtherOptionsIcon />
            </div>
            {isShowNotificationPost && (
                <NotificationPost onClose={() => setIsShowNotificationPost(false)} />
            )}
        </div>
    );
};

export default PostHeader;
