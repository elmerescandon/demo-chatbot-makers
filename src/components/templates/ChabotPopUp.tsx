import React, {useEffect, useState} from "react";
import Header from "../molecules/Header";
import Input from "../molecules/Input";
import type {IChatMessage} from "@/utils/interfaces";
import ChatGroup from "../organisms/ChatGroup";

const ChabotPopUp = () => {
    //  TODO: Handle error
    const [loading, setLoading] = useState<boolean>(false);
    const [role, setRole] = useState<string>("user");
    const chatsMockup: IChatMessage[] = [
        {
            type: "user",
            user: "You",
            message: "Hello",
        },
        {
            type: "chatbot",
            user: "Haikyuu",
            message: "Hello, how can I help you",
        },
    ];

    const [chats, setChats] = useState<IChatMessage[]>(chatsMockup);

    const handleNewMessage = async (message: string) => {
        try {
            const newMessage: IChatMessage = {
                type: "user",
                user: "You",
                message,
            };
            setRole("chatbot");
            setChats([...chats, newMessage]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const getBotResponse = async () => {
            try {
                setLoading(true);
                const response = await fetch("api/message", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: chats[chats.length - 1].message,
                    }),
                });
                const data = await response.json();
                const newChat: IChatMessage = {
                    type: "chatbot",
                    user: "Haikyuu",
                    message: data.message,
                };
                setChats([...chats, newChat]);
                setRole("user");
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (role === "chatbot") {
            getBotResponse();
        }
    }, [role]);

    return (
        <div className="max-w-lg w-full border rounded-2xl border-neutral-200 bg-white p-4">
            <Header status="online" />
            <hr />
            <ChatGroup chats={chats} loading={loading} />
            <Input handleNewMessage={handleNewMessage} />
        </div>
    );
};

export default ChabotPopUp;
