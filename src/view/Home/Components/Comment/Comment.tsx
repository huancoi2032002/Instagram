import React, { useState } from "react";
import Avatar from "../../../../assets/1.jpg";
import NotificationPost from "../NotificationPost/NotificationPost";
import { OtherOptionsIcon, VectorX } from "~/assets";

type CommentProps = {
    onClose: () => void
}

const Comment: React.FC<CommentProps> = ({ onClose }) => {

    const [isShowNotificationPost, setIsShowNotificationPost] = useState(false);

    const handleShowNotificationPost = () => {
        setIsShowNotificationPost(prev => !prev)
    }

    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-black/50 z-[100]">
            <div className="w-full h-full flex lg:py-20 2xl:py-10 px-4 sm:px-10 md:px-20 lg:px-40 2xl:px-72">
                <div className="w-[60%] h-full">
                    <img src={Avatar} className="w-full h-full object-cover" />
                </div>
                <div className="w-[40%] h-full bg-black">
                    <div className="w-full h-[60px] border-b border-white/10">
                        <div className="h-full w-full flex items-center justify-between">
                            <div className="flex items-center gap-4 pl-4 pr-1 py-[14px]">
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                                    <img src={Avatar} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-[#F5F5F5]">nauh_nguyn</span>
                                </div>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center">
                                <OtherOptionsIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowNotificationPost && (
                <NotificationPost onClose={() => setIsShowNotificationPost(false)} />
            )}
            <div className="absolute top-6 right-4 cursor-pointer" onClick={onClose}>
                <VectorX />
            </div>
        </div>
    );
};

export default Comment;