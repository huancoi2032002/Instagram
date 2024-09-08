import React from "react";
import Sidebar from "~/components/Sidebar/Sidebar";

type ILayoutMain = {
    children: React.ReactNode
}

const LayoutMain: React.FC<ILayoutMain> = ({ children }) => {
    return (
        <div className="w-full h-full flex">
            <div className="h-screen">
                <Sidebar />
            </div>
            <div className="flex justify-center">
                {children}
            </div>
        </div>
    )
}

export default LayoutMain