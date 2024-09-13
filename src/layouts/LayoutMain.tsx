import React from "react";
import Sidebar from "~/components/Sidebar/Sidebar";

type ILayoutMain = {
    children: React.ReactNode
}

const LayoutMain: React.FC<ILayoutMain> = ({ children }) => {
    return (
        <div className="w-full h-full flex">
            <div className="w-auto h-screen z-50">
                <Sidebar />
            </div>
            <div className="w-full h-full flex flex-col justify-center xl:ml-[245px] md:ml-[72px]">
                {children}
            </div>
        </div>
    )
}

export default LayoutMain