import React from "react"
import { VectorX } from "~/assets";
import { IUser } from "~/store/User/User";


const ItemsUser: React.FC<IUser> = ({ UserID, UserAvatar, UserName }) => {
    return (
        <div className="w-full h-full py-2 px-6 hover:bg-gray-300/20 cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full">
                    <img src={UserAvatar} className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="w-[248px] flex flex-col justify-">
                    <span className="text-sm text-[#F5F5F5]">{UserID}</span>
                    <span className="text-sm text-[#A8A8A8]">{UserName}</span>
                </div>
                <div className="p-2 cursor-pointer">
                    <VectorX className="w-4 h-4 fill-[#A8A8A8] stroke-[#A8A8A8]" />
                </div>
            </div>
        </div>
    )
}

export default ItemsUser