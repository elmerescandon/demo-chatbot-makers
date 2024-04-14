export interface IChatMessage {
    type: "chatbot" | "user";
    user: string;
    message: string;
}

export interface IMessage {
    message: string;
}
