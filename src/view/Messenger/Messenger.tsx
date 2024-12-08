import LayoutMain from "~/layouts/LayoutMain";
import ItemUserMessenger from "./Components/ItemUserMessenger/ItemUserMessenger";
import { DownArrowIcon, EditUSerIcon } from "~/assets";
import defaultAvatar from "~/assets/default-avatar.jpg";
import "./Messenger.scss";
import { useEffect, useState } from "react";
import NewMessenger from "./Components/NewMessenger/NewMessenger";
import ChatWithFriend from "./Components/ChatWithFriend/ChatWithFriend";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ConversationInterface } from "~/shared";

const Messenger = () => {
    // userId
    const loggedInUserId =
        localStorage.getItem("userID") || "6739d6501910d4b22d21a29b";
    // token
    const token =
        localStorage.getItem("authToken") ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzlkNjUwMTkxMGQ0YjIyZDIxYTI5YiIsImVtYWlsIjoia2llbnBoYW4xNjIxQGdtYWlsLmNvbSIsInBob25lIjpudWxsLCJ1c2VybmFtZSI6ImtpZW4iLCJpYXQiOjE3MzM1NzQyNzAsImV4cCI6MTczMzY2MDY3MH0.rt_H6WhBkB-8uGnJc6F7foTYBfAfKutzEkQ5Nqn68No";

    // conversationId
    const location = useLocation();
    const conversationId = location.pathname.toString().split("/")[2];
    console.log(conversationId, "conversationId");
    // conversationAccess
    const [conversationAccess, setConversationAccess] = useState<
        ConversationInterface | undefined
    >();

    // conversation
    const [conversations, setConversations] =
        useState<ConversationInterface[]>();

    //
    const [openNewMessenger, setOpenNewMessenger] = useState(false);

    const handOpenNewMessenger = () => {
        setOpenNewMessenger((prev) => !prev);
    };
    const handCloseNewMessenger = () => {
        setOpenNewMessenger(false);
    };

    useEffect(() => {
        // get conversations
        const getConversations = async () => {
            try {
                const result = await axios.get(
                    `https://dacnbe.onrender.com/conversation/getConversationOfOneUser?userId=${loggedInUserId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                            token: `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                        },
                    }
                );
                const newConversations = result.data as ConversationInterface[];
                console.log(result.data, "result");
                setConversationAccess(
                    newConversations.filter(
                        (con) => con._id === conversationId
                    )[0] || undefined
                );
                setConversations(newConversations);
            } catch (error) {
                console.error("Error fetching conversations:", error);
            }
        };
        getConversations();
    }, []);

    return (
        <LayoutMain>
            <div className="w-full h-screen flex">
                <div className="mx:w-[397px] flex flex-col h-full border-r border-white/20">
                    <div className="w-full pt-8 px-6 pb-3 flex items-center justify-between">
                        <div className="w-auto h-auto mx:block hidden">
                            <div className="flex items-center gap-3  ">
                                <span className="text-xl font-bold">
                                    nauh_nguyn
                                </span>
                                <DownArrowIcon className="rotate-180 w-3 h-3 text-ig-secondary-text" />
                            </div>
                        </div>
                        <div
                            className="p-2 w-10 h-10 cursor-pointer"
                            onClick={handOpenNewMessenger}
                        >
                            <EditUSerIcon />
                        </div>
                    </div>
                    <div className="h-[140px] pl-4 mx:block hidden">
                        <div className="h-full flex flex-col justify-end">
                            <div className="w-[74px] h-[74px] relative">
                                <img
                                    src={defaultAvatar}
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <div className="absolute top-[-34px]">
                                    <div className="relative p-2 bg-ig-elevated-background text-ig-secondary-text text-xs rounded-[14px] ">
                                        <div className="min-w-4 py-2">
                                            Ghi chú...
                                        </div>
                                        <div className="absolute w-2 h-1 bottom-[-3px] left-3 bg-ig-elevated-background rounded-b-2xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-xs text-ig-secondary-text">
                                    Ghi chú của bạn
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-scroll scrollbar-always">
                        <div className="w-auto h-auto mx:block hidden">
                            <div className="w-full flex justify-between items-center pt-[14px] pb-[10px] px-6  ">
                                <span className="text-base font-bold">
                                    <h1>Tin nhắn</h1>
                                </span>
                                <span className="text-sm text-ig-secondary-text cursor-pointer">
                                    Tin nhắn đang chờ
                                </span>
                            </div>
                        </div>
                        <div className="w-full">
                            {conversations?.map((conversation) => (
                                <ItemUserMessenger
                                    conversationId={conversation._id}
                                    conversationName={
                                        conversation.participants.filter(
                                            (participant) =>
                                                participant._id !==
                                                loggedInUserId
                                        )[0].fullname
                                    }
                                    conversationAvatar={
                                        conversation.participants.filter(
                                            (participant) =>
                                                participant._id !==
                                                loggedInUserId
                                        )[0].avatar || defaultAvatar
                                    }
                                    senderName={
                                        conversation.lastMessage.sender.fullname
                                    }
                                    senderAvatar={
                                        conversation.lastMessage.sender
                                            .avatar || defaultAvatar
                                    }
                                    senderContent={
                                        conversation.lastMessage.content ||
                                        "Vừa gửi 1 tin nhắn"
                                    }
                                    sendTime={
                                        conversation.lastMessage.createdAt
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/*Giao diện này khi mới vô chat
                <div className="w-full h-full flex items-center justify-center">
                    
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div>
                            <CanvasMessengerIcon />
                        </div>
                        <span className="text-xl">Tin nhắn của bạn</span>
                        <span className="text-sm text-ig-secondary-text">Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm</span>
                        <div className="px-4 py-1 bg-ig-primary-button rounded-lg cursor-pointer hover:bg-ig-primary-button-hover" onClick={handOpenNewMessenger}>Gửi tin nhắn</div>
                    </div>
                    
                    
                </div>
                */}
                {conversationAccess && (
                    <div className="w-full h-screen">
                        <ChatWithFriend
                            avatar={defaultAvatar}
                            fullname={
                                conversationAccess.participants.filter(
                                    (participant) =>
                                        participant._id !== loggedInUserId
                                )[0].fullname
                            }
                            username={
                                conversationAccess.participants.filter(
                                    (participant) =>
                                        participant._id !== loggedInUserId
                                )[0].username
                            }
                            userId={loggedInUserId}
                            conversationCreatedAt={conversationAccess.createdAt}
                            conversationId={conversationId}
                        />
                    </div>
                )}
                {openNewMessenger && (
                    <NewMessenger onClose={handCloseNewMessenger} />
                )}
            </div>
        </LayoutMain>
    );
};

export default Messenger;
