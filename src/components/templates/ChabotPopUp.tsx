import React from "react";
import Header from "../molecules/Header";

const ChabotPopUp = () => {
    return (
        <div className="max-w-[328px] w-full border rounded-2xl border-neutral-200 bg-white p-4">
            <Header status="online" />
            <hr />
        </div>
    );
};

export default ChabotPopUp;
