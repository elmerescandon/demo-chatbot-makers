import Image from "astro/components/Image.astro";
import React from "react";

type TagProps = {
    user: string;
    type: "chatbot" | "user";
};

const Tag = ({user, type}: TagProps) => {
    if (type === "chatbot") {
        return (
            <div className="flex gap-2 items-center">
                <img
                    src="/catbot.svg"
                    alt={user}
                    className="w-4 h-4 rounded-full"
                />
                <p className="font-semibold">{user}</p>
            </div>
        );
    } else {
        return (
            <div className="flex gap-2 items-center justify-end">
                <img
                    src="/user.svg"
                    alt={user}
                    className="w-4 h-4 rounded-full"
                />
                <p className="font-semibold">{user}</p>
            </div>
        );
    }
};

export default Tag;
