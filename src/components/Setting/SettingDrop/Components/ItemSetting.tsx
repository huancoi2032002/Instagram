import React from "react";
import { Link } from "react-router-dom";

type TSettingDrop = {
    icon: React.ReactNode
    title: string
    path?: string
}
const ItemSetting: React.FC<TSettingDrop> = ({ icon, title, path }) => {
    return (
        <Link to={path || ""}>
            <div className="w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm">
                <div>{icon}</div>
                <div>{title}</div>
            </div>
        </Link>
    )
}

export default ItemSetting