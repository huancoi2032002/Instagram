import React from "react";
import { IUser } from "~/store/User/User";
import './ItemUserMessenger.scss';


const ItemUserMessenger: React.FC<IUser> = ({ UserAvatar, UserName, UserID, isActive }) => {
    return (
        <div className="mx:w-[382px] px-6 py-2 hover:bg-ig-elevated-background/50 cursor-pointer" key={UserID}>
            <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 relative">
                    <img src={UserAvatar} className="w-full h-full object-cover rounded-full" />
                    <div className={`absolute bottom-1 right-[2px] w-3 h-3 bg-green-500 rounded-full ${isActive ? "block" : "hidden"}`}></div>
                </div>
                <div className="h-full w-full mx:block hidden">
                    <div className="flex flex-col items-start">
                        <span className="text-sm text-ig-primary-text">{UserName}</span>
                        <span className="text-ig-secondary-text text-xs">Hoạt động 3 phút trước</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemUserMessenger
