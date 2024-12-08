interface UserInterface {
    _id: string;
    fullname: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    avatar?: string;
    biography: string;
    score: number;
    isOnline: boolean;
}

export interface MessageInterface {
    _id: string;
    conversation: string;
    sender: UserInterface;
    medias: {
        type: string;
        source: string;
        fileName: string;
    }[];
    content: string;
    isRead: boolean;
    createdAt: string;
}

export interface ConversationInterface {
    _id: string;
    participants: UserInterface[];
    lastMessage: MessageInterface;
    isBlock: boolean;
    createdAt: string;
}
