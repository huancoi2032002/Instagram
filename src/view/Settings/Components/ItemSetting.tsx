import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type TSettingDrop = {
    icon: React.ReactNode;
    title: string;
    path?: string;
    className?: string; // Add className to props
};

const ItemSetting: React.FC<TSettingDrop> = ({ icon, title, path = "", className = "" }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link to={path}>
            <div className={`w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm ${isActive ? className : ""}`}>
                <div>{icon}</div>
                <div>{title}</div>
            </div>
        </Link>
    );
};

export default ItemSetting;
