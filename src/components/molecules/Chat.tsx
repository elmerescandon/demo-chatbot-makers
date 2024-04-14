import React from "react";
import Tag from "./Tag";

type ChatProps = {
    type: "user" | "chatbot";
    user: string;
    message: string;
};

const Chat = ({type, user, message}: ChatProps) => {
    return (
        <div
            className={`flex flex-col ${
                type === "user" ? "items-end" : "items-start"
            }`}
        >
            <Tag type={type} user={user} />
            <p
                className={`${
                    type === "user" ? "text-right pr-4" : "text-left pl-8"
                }`}
            >
                {message}
            </p>
        </div>
    );
};

export default Chat;
