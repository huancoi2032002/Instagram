import React, { useRef, useState } from "react";
import { CallIcon, EmojisIcon, FavouriteIcon, ImageIcon, InfomationFocusIcon, InfomationlIcon, LoveIcon, MicIcon, VideoCallIcon } from "~/assets";
import { IUser } from "~/store/User/User";
import DetailChat from "./DetailChat";



const ChatWithFriend: React.FC<IUser> = ({ UserAvatar, UserID, UserName, isActive }) => {

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messenger, setMessenger] = useState("");
    const [openDetailChat, setOpenDetailChat] = useState(false);

    const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessenger(event.target.value)
    }

    const handleInputTextarea = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "20px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            textAreaRef.current.style.height = `${Math.min(scrollHeight, 124)}px`;
        }
    }
    const handleOpenDetailChat = () => {
        setOpenDetailChat(prev => !prev)
    }

    return (
        <div className={`grid ${openDetailChat ? "mx:grid-cols-4 grid-cols-5" : "grid-cols-1"} h-screen`}>
            <div className={`${openDetailChat ? "mx:col-span-3 col-span-3" : "col-span-1"} h-full flex flex-col border-r border-white/20`}>
                <div className="w-full px-4 border-b border-white/20">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full">
                            <div className="w-full py-4 custom-user-messeng cursor-pointer" key={UserID}>
                                <div className="w-full flex items-center gap-4">
                                    <div className="w-11 h-11 relative">
                                        <img src={UserAvatar} className="w-full h-full object-cover rounded-full" />
                                        <div className={`absolute bottom-1 right-[2px] w-3 h-3 bg-green-500 rounded-full ${isActive ? "block" : "hidden"}`}></div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm text-ig-primary-text">{UserName}</span>
                                        <span className="text-ig-secondary-text text-xs">Hoạt động 3 phút trước</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full flex items-center gap-2">
                            <div className="w-10 h-10 p-2 cursor-pointer">
                                <CallIcon />
                            </div>
                            <div className="w-10 h-10 p-2 cursor-pointer">
                                <VideoCallIcon />
                            </div>
                            <div className="w-10 h-10 p-2 cursor-pointer" onClick={handleOpenDetailChat}>
                                {openDetailChat ? (
                                    <InfomationFocusIcon className="" />
                                ) : (

                                    <InfomationlIcon className="" />
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-grow  overflow-y-scroll scrollbar-always">
                    <div className="">
                        <div className="w-full h-full">
                            <div className="h-5 w-full"></div>
                            <div className="w-full flex flex-col items-center">
                                <div className="py-4">
                                    <img src={UserAvatar} className="w-24 h-24 object-cover rounded-full" />
                                </div>
                                <span className="text-xl text-ig-primary-text">{UserName}</span>
                                <span className="text-sm text-ig-secondary-text">{UserID} · Instagram</span>
                                <div className="pt-6 pb-8"><button className="h-8 px-4 text-sm bg-ig-bg-button rounded-md">Xem trang cá nhân</button></div>
                                <div className="w-full py-4 px-5 text-center"><span className="text-[15px] font-bold">17:41 18 Tháng 10, 2024</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[78px]">
                    <div className="w-full px-4 h-full flex items-center">
                        <div className="min-h-11 w-full flex items-center px-4 border border-white/20 rounded-3xl">
                            <div>
                                <EmojisIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-grow h-auto flex items-center">
                                <textarea
                                    ref={textAreaRef}
                                    className="h-5 max-h-[124px] w-full outline-none resize-none bg-transparent overflow-y-auto pl-4 placeholder:text-ig-secondary-text text-ig-secondary-text"
                                    placeholder="Nhắn tin..."
                                    onInput={handleInputTextarea}
                                    onChange={handleChangeInput}
                                    style={{ lineHeight: '1.5' }}
                                />
                            </div>
                            {messenger.trim() ? (
                                <button className="text-ig-primary-button">Gửi</button>
                            ) : (

                                <div className="flex">
                                    <div className="p-2"><MicIcon /></div>
                                    <div className="p-2"><ImageIcon /></div>
                                    <div className="p-2"><LoveIcon /></div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {openDetailChat && (
                <div className="mx:col-span-1 min-w-[249px]">
                    <DetailChat />
                </div>
            )}
        </div>
    )
}

export default ChatWithFriend