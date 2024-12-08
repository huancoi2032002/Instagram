import { dateTransformToDateTimeFormated } from "~/helpers";
import "./ItemUserMessenger.scss";
import { useSocketData } from "~/Hook/SocketContext";
import { useEffect, useState } from "react";

function ItemUserMessenger({
    conversationId,
    conversationAvatar,
    conversationName,
    senderName,
    senderAvatar,
    senderContent,
    sendTime,
}: {
    conversationId: string;
    conversationAvatar: string;
    conversationName: string;
    senderName: string;
    senderAvatar: string;
    senderContent: string;
    sendTime: string;
}) {
    //

    //
    const [conversationInfo, setConversationInfo] = useState({
        conversationId,
        conversationAvatar,
        conversationName,
        senderName,
        senderAvatar,
        senderContent,
        sendTime,
    });
    const { receiveMessageData, deleteMessageData } = useSocketData();

    useEffect(() => {
        if (
            receiveMessageData &&
            conversationInfo.conversationId === receiveMessageData.conversation
        ) {
            console.log(receiveMessageData, "receiveMessageData");

            setConversationInfo({
                ...conversationInfo,
                senderName: receiveMessageData.sender.fullname,
                senderAvatar: receiveMessageData.sender.avatar || senderAvatar,
                senderContent: receiveMessageData.content,
                sendTime: receiveMessageData.createdAt,
            });
        }
    }, [receiveMessageData]);

    useEffect(() => {
        if (
            deleteMessageData &&
            conversationInfo.conversationId === deleteMessageData.conversation
        ) {
            console.log(deleteMessageData, "deleteMessageData");

            setConversationInfo({
                ...conversationInfo,
                senderName: deleteMessageData.sender.fullname,
                senderAvatar: deleteMessageData.sender.avatar || senderAvatar,
                senderContent: deleteMessageData.content,
                sendTime: deleteMessageData.createdAt,
            });
        }
    }, [deleteMessageData]);

    //
    const handleClickConversationItem = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        thisConversationId: string
    ) => {
        event.preventDefault();

        window.location.href =
            window.location.origin + "/messenger/" + thisConversationId;
    };

    return (
        <div
            className="mx:w-[382px] px-6 py-2 hover:bg-ig-elevated-background/50 cursor-pointer"
            key={conversationInfo.conversationId}
            onClick={(event) =>
                handleClickConversationItem(
                    event,
                    conversationInfo.conversationId
                )
            }
        >
            <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 relative">
                    <img
                        src={conversationInfo.conversationAvatar}
                        className="w-full h-full object-cover rounded-full"
                    />
                    <div
                        className={`absolute bottom-1 right-[2px] w-3 h-3 bg-green-500 rounded-full`}
                    ></div>
                </div>
                <div className="h-full w-full mx:block hidden">
                    <div className="flex flex-col items-start gap-2">
                        <span className="text-sm text-ig-primary-text">
                            {conversationInfo.conversationName}
                        </span>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-start items-center">
                                {senderAvatar && (
                                    <img
                                        src={conversationInfo.senderAvatar}
                                        className="w-4 h-4 rounded-full"
                                    />
                                )}
                                <span className="text-ig-secondary-text text-xs line-clamp-1 ms-1">
                                    {conversationInfo.senderName}
                                </span>
                                <span className="text-ig-secondary-text text-xs line-clamp-1 ms-2">
                                    {conversationInfo.senderContent}
                                </span>
                            </div>
                            <span className="text-ig-secondary-text text-xs">
                                {
                                    dateTransformToDateTimeFormated(
                                        conversationInfo.sendTime
                                    ).split(" ")[1]
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemUserMessenger;
