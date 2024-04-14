import React from "react";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="px-2 py-1 bg-neutral-100 w-12 rounded-lg">
            <div className="loader w-8 h-5"></div>
        </div>
    );
};

export default Loading;
