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
            <div>
                <Image src={imageURL} alt={user} width={100} height={100} />
                <p>{user}</p>
            </div>
        );
    } else {
        return (
            <div>
                <Image src={imageURL} alt={user} width={100} height={100} />
                <p>{user}</p>
            </div>
        );
    }
};

export default Tag;
