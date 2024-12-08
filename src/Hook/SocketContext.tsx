import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MessageInterface } from "~/shared";

// Props cho SocketProvider
interface SocketProviderProps {
    userId: string;
    children: React.ReactNode;
}

// Định nghĩa type cho context
interface SocketContextType {
    socket: Socket | null;
    receiveMessageData: MessageInterface | null;
    readMessageData: MessageInterface | null;
    deleteMessageData: MessageInterface | null;
}

// Tạo context
const SocketContext = createContext<SocketContextType | null>(null);

// Provider
export default function SocketProvider({
    userId,
    children,
}: SocketProviderProps) {
    const [socket] = useState(() =>
        io("https://dacnbe.onrender.com", {
            query: { userId },
        })
    );
    const [receiveMessageData, setReceiveMessageData] =
        useState<MessageInterface | null>(null);
    const [readMessageData, setReadMessageData] =
        useState<MessageInterface | null>(null);
    const [deleteMessageData, setDeleteMessageData] =
        useState<MessageInterface | null>(null);

    useEffect(() => {
        if (userId) {
            socket.on("RECEIVEMESSAGE", (payload) => {
                console.log(payload, "RECEIVEMESSAGE");
                setReceiveMessageData(payload.message);
            });
            socket.on("DELETEMESSAGE", (payload) => {
                console.log(payload, "DELETEMESSAGE");
                setDeleteMessageData(payload);
            });
            socket.on("READMESSAGE", (payload) => {
                console.log(payload, "READMESSAGE");
                setReadMessageData(payload);
            });

            return () => {
                socket.off("RECEIVEMESSAGE");
                socket.off("DELETEMESSAGE");
                socket.off("READMESSAGE");
            };
        }
    }, [userId, socket]);

    return (
        <SocketContext.Provider
            value={{
                socket,
                receiveMessageData,
                readMessageData,
                deleteMessageData,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
}

// Custom hook để sử dụng context
export const useSocketData = (): SocketContextType => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error(
            "useSocketData phải được sử dụng bên trong SocketProvider"
        );
    }
    return context;
};
