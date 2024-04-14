import React from "react";
import Tag from "./Tag";

type HeaderProps = {
    status: "offline" | "online";
};

const Header = ({status}: HeaderProps) => {
    return (
        <div className="flex justify-between py-2 px-4">
            <div className="flex gap-2 items-center">
                <p className="text-base font-bold">Chat</p>
                <div
                    className={`${
                        status === "offline" ? "bg-green-500" : "bg-red-500"
                    } w-2 h-2 rounded-full`}
                ></div>
            </div>
            <Tag user="Haikyuu" imageURL="/catbot.svg" type="chatbot" />
        </div>
    );
};

export default Header;
