import React, { useRef, useState } from "react";
import { CallIcon, EmojisIcon, FavouriteIcon, ImageIcon, InfomationFocusIcon, InfomationlIcon, LoveIcon, MicIcon, VideoCallIcon } from "~/assets";
import { IUser } from "~/store/User/User";
import DetailChat from "./DetailChat";

interface FilePreview {
    name: string;
    type: string;
    preview: string;
}

const ChatWithFriend: React.FC<IUser> = ({ UserAvatar, UserID, UserName, isActive }) => {

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messenger, setMessenger] = useState("");
    const [openDetailChat, setOpenDetailChat] = useState(false);
    const [isSelectImage, setIsSelectImage] = useState<FilePreview[]>([]);

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

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) {
            console.warn("Không có tệp nào được chọn.");
            return;
        }

        try {
            // Chuyển FileList thành mảng
            const fileArray = Array.from(files);
            // Tạo URL blob để hiển thị trước hình ảnh/video
            const previewFiles = fileArray.map(file => ({
                name: file.name,
                type: file.type,
                preview: URL.createObjectURL(file),
            }));
            setIsSelectImage(previewFiles); // Lưu thông tin file vào state
        } catch (error) {
            console.error("Có lỗi xảy ra khi xử lý tệp:", error);
        }
    };

    const handleRemoveImage = (index: number) => {
        setIsSelectImage(prev => prev.filter((_, i) => i !== index));
    };


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
                <div className="w-full h-auto mb-2">
                    <div className="w-full px-4 h-full flex items-center">
                        <div className="min-h-11 w-full flex flex-col px-4 border border-white/20 rounded-3xl">
                            <div className="flex items-center">
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
                                        <div className="p-2">
                                            <input
                                                type="file"
                                                accept="image/*,video/*" // Chấp nhận ảnh và video
                                                multiple
                                                id="image-upload"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                            <label
                                                htmlFor="image-upload"
                                                className="cursor-pointer"
                                            >
                                                <ImageIcon />
                                            </label>
                                        </div>
                                        <div className="p-2"><LoveIcon /></div>
                                    </div>
                                )}
                            </div>
                            {isSelectImage && isSelectImage.length > 0 && (
                                <div className="mt-2 ml-10 mb-2 flex gap-2">
                                    {isSelectImage.map((file, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={file.preview}
                                                alt={file.name}
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <button
                                                className="absolute top-0 right-0 bg-ig-bg-button text-white rounded-full w-5 h-5"
                                                onClick={() => handleRemoveImage(index)}
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
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