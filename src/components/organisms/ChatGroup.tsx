import type {IChatMessage} from "@/utils/interfaces";
import React from "react";
import Chat from "../molecules/Chat";
import Loading from "../molecules/Loading/Loading";

type ChatGroupProps = {
    chats: IChatMessage[];
    loading: boolean;
};

const ChatGroup = ({chats, loading}: ChatGroupProps) => {
    return (
        <div className="flex flex-col gap-4 overflow-y-scroll py-4 max-h-[480px] pr-6">
            {chats.map((chat, index) => (
                <Chat
                    key={index}
                    type={chat.type}
                    user={chat.user}
                    message={chat.message}
                />
            ))}
            {loading && <Loading />}
        </div>
    );
};

export default ChatGroup;
