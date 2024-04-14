import Image from "astro/components/Image.astro";
import React from "react";

type TagProps = {
    user: string;
    imageURL: string;
    type: "chatbot" | "user";
};

const Tag = ({user, imageURL, type}: TagProps) => {
    if (type === "chatbot") {
        return (
            <div className="flex gap-2 items-center">
                <img
                    src={imageURL}
                    alt={user}
                    className="w-4 h-4 rounded-full"
                />
                <p>{user}</p>
            </div>
        );
    } else {
        return (
            <div className="flex gap-2 items-center">
                <Image src={imageURL} alt={user} width={100} height={100} />
                <p>{user}</p>
            </div>
        );
    }
};

export default Tag;
