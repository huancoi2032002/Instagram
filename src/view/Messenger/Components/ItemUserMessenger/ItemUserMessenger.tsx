import { dateTransformToDateTimeFormated } from "~/helpers";
import "./ItemUserMessenger.scss";

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
    console.log(sendTime, "sendtime");

    return (
        <div
            className="mx:w-[382px] px-6 py-2 hover:bg-ig-elevated-background/50 cursor-pointer"
            key={conversationId}
        >
            <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 relative">
                    <img
                        src={conversationAvatar}
                        className="w-full h-full object-cover rounded-full"
                    />
                    <div
                        className={`absolute bottom-1 right-[2px] w-3 h-3 bg-green-500 rounded-full`}
                    ></div>
                </div>
                <div className="h-full w-full mx:block hidden">
                    <div className="flex flex-col items-start gap-2">
                        <span className="text-sm text-ig-primary-text">
                            {conversationName}
                        </span>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-start items-center">
                                <img
                                    src={senderAvatar}
                                    className="w-4 h-4 rounded-full"
                                />
                                <span className="text-ig-secondary-text text-xs line-clamp-1 ms-1">
                                    {senderName}
                                </span>
                                <span className="text-ig-secondary-text text-xs line-clamp-1 ms-2">
                                    {senderContent}
                                </span>
                            </div>
                            <span className="text-ig-secondary-text text-xs">
                                {
                                    dateTransformToDateTimeFormated(
                                        sendTime
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
