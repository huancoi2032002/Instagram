import React, { useEffect, useRef, useState } from "react";
import {
    CallIcon,
    EmojisIcon,
    ImageIcon,
    InfomationFocusIcon,
    InfomationlIcon,
    LoveIcon,
    MicIcon,
    VideoCallIcon,
} from "~/assets";
import DetailChat from "./DetailChat";
import { dateTransformToDateTimeFormated } from "~/helpers";
import defaultAvatar from "~/assets/default-avatar.jpg";
import { MessageInterface } from "~/shared";
import axios from "axios";
import { useSocketData } from "~/Hook/SocketContext";

interface FilePreview {
    name: string;
    type: string;
    preview: string;
    file: File;
}

function ChatWithFriend({
    avatar,
    fullname,
    username,
    userId,
    conversationCreatedAt,
    conversationId,
}: {
    avatar: string;
    fullname: string;
    username: string;
    userId: string;
    conversationCreatedAt: string;
    conversationId: string;
}) {
    // userId
    const loggedInUserId =
        localStorage.getItem("userID") || "6739d6501910d4b22d21a29b";
    const token =
        localStorage.getItem("authToken") ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzlkNjUwMTkxMGQ0YjIyZDIxYTI5YiIsImVtYWlsIjoia2llbnBoYW4xNjIxQGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJ1c2VybmFtZSI6ImtpZW4iLCJpYXQiOjE3MzM2NDYyMDksImV4cCI6MTczMzczMjYwOX0.emd86pHTf9McsbzE433wXKAXFV_nmnSe9Fj_sIWEGZQ";
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messenger, setMessenger] = useState("");
    const [openDetailChat, setOpenDetailChat] = useState(false);
    const [isSelectImage, setIsSelectImage] = useState<FilePreview[]>([]);

    // messages
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    // receive data from socket
    const { receiveMessageData, readMessageData, deleteMessageData } =
        useSocketData();

    // when socket data change
    // receive message
    useEffect(() => {
        if (receiveMessageData) {
            setMessages((prev) => [...prev, receiveMessageData]);
        }
    }, [receiveMessageData]);

    // delete message
    useEffect(() => {
        if (deleteMessageData) {
            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg._id === deleteMessageData._id ? deleteMessageData : msg
                )
            );
        }
    }, [deleteMessageData]);

    // get messages
    useEffect(() => {
        const getMessages = async () => {
            try {
                const result = await axios.get(
                    `https://dacnbe.onrender.com/message/getMessage?conversationId=${conversationId}&lastMessageId=&isAll=yes`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                            token: `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                        },
                    }
                );

                setMessages(result.data);
            } catch (error) {
                console.error("Error fetching conversations:", error);
            }
        };
        getMessages();
    }, []);

    // scroll
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (messages) {
                const messageElement = document.getElementById(
                    messages[messages.length - 1]._id
                );
                if (messageElement) {
                    messageElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 1500);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [messages]);

    const handleChangeInput = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessenger(event.target.value);
    };

    const handleInputTextarea = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "20px";
            const scrollHeight = textAreaRef.current.scrollHeight;
            textAreaRef.current.style.height = `${Math.min(
                scrollHeight,
                124
            )}px`;
        }
    };
    const handleOpenDetailChat = () => {
        setOpenDetailChat((prev) => !prev);
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files;

        if (!files) {
            console.warn("Không có tệp nào được chọn.");
            return;
        }

        try {
            // Chuyển FileList thành mảng
            const fileArray = Array.from(files);
            // Tạo URL blob để hiển thị trước hình ảnh/video
            const previewFiles = fileArray.map((file) => ({
                name: file.name,
                type: file.type,
                preview: URL.createObjectURL(file),
                file: file,
            }));
            setIsSelectImage(previewFiles); // Lưu thông tin file vào state
        } catch (error) {
            console.error("Có lỗi xảy ra khi xử lý tệp:", error);
        }
    };

    const handleRemoveImage = (index: number) => {
        setIsSelectImage((prev) => prev.filter((_, i) => i !== index));
    };

    // hit enter to send message
    const handleKeyDown = async (
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Ngăn việc xuống dòng
            const value = (event.target as HTMLTextAreaElement).value; // Sử dụng type assertion

            // send messages
            try {
                const formData = new FormData();

                // files
                isSelectImage.forEach((file) => {
                    formData.append("medias", file.file); // Thêm từng file vào formData
                });

                // other data
                formData.append("conversation", conversationId);
                formData.append("sender", loggedInUserId);
                formData.append("forwardFrom", ""); // Nếu không có dữ liệu forwardFrom
                formData.append("content", value);

                setIsSelectImage([]);
                (event.target as HTMLTextAreaElement).value = "";

                // Gửi yêu cầu POST với axios
                await axios.post(
                    `https://dacnbe.onrender.com/message/sendMessage`,
                    formData, // Truyền formData trực tiếp
                    {
                        headers: {
                            "Content-Type": "multipart/form-data", // Quan trọng để gửi file
                            Accept: "*/*",
                            token: `Bearer ${token}`, // Sử dụng "Authorization" thay vì "token"
                        },
                    }
                );
            } catch (error) {
                console.error("Error sending messages:", error);
            }
        }
    };

    //
    const handleDeleteMessage = async (
        event: React.MouseEvent<HTMLButtonElement>,
        messageId: string
    ) => {
        event.preventDefault();
        try {
            await axios.get(
                `https://dacnbe.onrender.com/message/deleteMessage?messageId=${messageId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                        token: `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                    },
                }
            );
        } catch (error) {
            console.error("Error delete message:", error);
        }
    };

    return (
        <div
            className={`grid ${
                openDetailChat ? "mx:grid-cols-4 grid-cols-5" : "grid-cols-1"
            } h-screen`}
        >
            <div
                className={`relative ${
                    openDetailChat ? "mx:col-span-3 col-span-3" : "col-span-1"
                } h-[100vh] flex flex-col border-r border-white/20`}
            >
                <div className="self-start w-full px-4 border-b border-white/20">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full">
                            <div
                                className="w-full py-4 custom-user-messeng cursor-pointer"
                                key={username}
                            >
                                <div className="w-full flex items-center gap-4">
                                    <div className="w-11 h-11 relative">
                                        <img
                                            src={avatar}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                        <div
                                            className={`absolute bottom-1 right-[2px] w-3 h-3 bg-green-500 rounded-full`}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm text-ig-primary-text">
                                            {fullname}
                                        </span>
                                        <span className="text-ig-secondary-text text-xs">
                                            Hoạt động 3 phút trước
                                        </span>
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
                            <div
                                className="w-10 h-10 p-2 cursor-pointer"
                                onClick={handleOpenDetailChat}
                            >
                                {openDetailChat ? (
                                    <InfomationFocusIcon className="" />
                                ) : (
                                    <InfomationlIcon className="" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col overflow-y-scroll scrollbar-always mb-[120px]">
                    <div className="">
                        <div className="w-full h-full">
                            <div className="h-5 w-full"></div>
                            <div className="w-full flex flex-col items-center">
                                <div className="py-4">
                                    <img
                                        src={avatar}
                                        className="w-24 h-24 object-cover rounded-full"
                                    />
                                </div>
                                <span className="text-xl text-ig-primary-text">
                                    {fullname}
                                </span>
                                <span className="text-sm text-ig-secondary-text">
                                    {username} · Instagram
                                </span>
                                <div className="pt-6 pb-8">
                                    <button className="h-8 px-4 text-sm bg-ig-bg-button rounded-md">
                                        Xem trang cá nhân
                                    </button>
                                </div>
                                <div className="w-full py-4 px-5 text-center">
                                    <span className="text-[15px] font-bold">
                                        {dateTransformToDateTimeFormated(
                                            conversationCreatedAt
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {messages &&
                        messages.map((message, index) => (
                            <div
                                className={`${
                                    message.sender._id === loggedInUserId
                                        ? "[&_.buttonDeleteMessage]:hover:block"
                                        : ""
                                } ${
                                    index === 0 ? `mt-[20vh]` : `mt-4`
                                } flex flex-row w-full ${
                                    message.sender._id === loggedInUserId
                                        ? `justify-end`
                                        : `justify-start`
                                }`}
                                id={message._id}
                            >
                                <div
                                    className={`relative mx-4 flex ${
                                        message.sender._id === loggedInUserId
                                            ? `flex-row-reverse`
                                            : `flex-row`
                                    } gap-2 max-w-[50%]`}
                                >
                                    <button
                                        className={`buttonDeleteMessage hidden absolute bottom-0 ${
                                            message.sender._id ===
                                            loggedInUserId
                                                ? `left-[-16px]`
                                                : `right-[-16px]`
                                        } bg-white text-black rounded-full w-5 h-5`}
                                        onClick={(e) =>
                                            handleDeleteMessage(e, message._id)
                                        }
                                    >
                                        ×
                                    </button>
                                    <img
                                        src={defaultAvatar}
                                        className="w-8 h-8 rounded-full self-end"
                                    />
                                    <div className="flex flex-col">
                                        <div
                                            className={`flex ${
                                                message.sender._id ===
                                                loggedInUserId
                                                    ? `flex-row-reverse`
                                                    : `flex-row`
                                            } flex-wrap gap-1`}
                                        >
                                            {message.medias &&
                                                message.medias.map((media) => {
                                                    if (
                                                        media.type === "image"
                                                    ) {
                                                        return (
                                                            <img
                                                                src={
                                                                    media.source ||
                                                                    defaultAvatar
                                                                }
                                                                className="max-h-[200px]"
                                                            />
                                                        );
                                                    } else if (
                                                        media.type === "video"
                                                    ) {
                                                        return (
                                                            <video
                                                                src={
                                                                    media.source
                                                                }
                                                                className="max-h-[200px]"
                                                            ></video>
                                                        );
                                                    }
                                                })}
                                        </div>
                                        <div
                                            className={`flex flex-col ${
                                                message.sender._id ===
                                                loggedInUserId
                                                    ? "bg-blue-500"
                                                    : "bg-slate-500"
                                            } rounded-bl-xl rounded-br-xl p-2`}
                                        >
                                            <span
                                                className={`break-words ${
                                                    message.sender._id ===
                                                    loggedInUserId
                                                        ? `self-end`
                                                        : `self-start`
                                                }`}
                                            >
                                                {message.content}
                                            </span>
                                            <span
                                                className={`break-words mt-1 text-xs ${
                                                    message.sender._id ===
                                                    loggedInUserId
                                                        ? `self-end`
                                                        : `self-start`
                                                }`}
                                            >
                                                {
                                                    dateTransformToDateTimeFormated(
                                                        message.createdAt
                                                    ).split(" ")[1]
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="mb-2 absolute bottom-0 left-0 right-0">
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
                                        style={{ lineHeight: "1.5" }}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                                {messenger.trim() ? (
                                    <button className="text-ig-primary-button">
                                        Gửi
                                    </button>
                                ) : (
                                    <div className="flex">
                                        <div className="p-2">
                                            <MicIcon />
                                        </div>
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
                                        <div className="p-2">
                                            <LoveIcon />
                                        </div>
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
                                                onClick={() =>
                                                    handleRemoveImage(index)
                                                }
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
    );
}

export default ChatWithFriend;
