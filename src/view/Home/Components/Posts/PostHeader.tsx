import React, { useState, useEffect } from "react";
import { OtherOptionsIcon } from "~/assets";
import OnclickText from "~/components/OnclickText/OnclickText";
import NotificationPost from "../NotificationPost/NotificationPost";
import { formatDateDifference } from "~/store/format/formatDateDifference";

interface PostHeaderProps {
    username: string;
    avatar: string;
    createdAt: string
}





const PostHeader: React.FC<PostHeaderProps> = ({ username, avatar, createdAt }) => {
    const [isShowNotificationPost, setIsShowNotificationPost] = useState(false);
    const [formattedDate, setFormattedDate] = useState<string>("");

    const handleShowNotificationPost = () => {
        setIsShowNotificationPost(prev => !prev)
    }

    useEffect(() => {
        const formattedDate = formatDateDifference(createdAt);
        setFormattedDate(formattedDate);
    }, [createdAt]);


    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 ">
                <img
                    src={avatar}
                    alt="user profile pic"
                    className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="flex items-center text-xs font-bold gap-1">
                    <div className="cursor-pointer">{username}</div>
                    <span className="text-gray-600 font-medium">{formattedDate}</span>
                    <span className="text-gray-600 font-medium flex items-center gap-1">• <OnclickText initialLabel="Đang theo dõi" activeLabel="Theo dõi" /></span>
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
