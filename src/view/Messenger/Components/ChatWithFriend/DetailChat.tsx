import { BellIcon } from "~/assets";
import Switch from "~/components/Switch/Switch";
import ItemUserMessenger from "../ItemUserMessenger/ItemUserMessenger";
import NgocDiep from '~/assets/5.jpg';
import React from "react";
import { IUser } from "~/store/User/User";

const DetailUser: React.FC<IUser> = ({ UserAvatar, UserID, UserName }) => {
    return (
        <div className="w-full px-6 py-4 hover:bg-ig-elevated-background/50">
            <div className="w-full h-11 flex justify-between items-center cursor-pointer">
                <div className="w-full flex gap-3">
                    <div className="w-14 h-14 flex-shrink-0">
                        <img src={UserAvatar} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center">
                        <span className="text-sm text-ig-primary-text font-bold">{UserID}</span>
                        <span className='text-sm text-ig-secondary-text text-nowrap'>{UserName}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DetailChat = () => {
    return (
        <div className="w-auto h-full flex flex-col">
            <div className="border-b border-white/20">
                <div className="px-6 py-6">
                    <h1 className="text-xl font-bold">Chi tiết</h1>
                </div>
            </div>
            <div className="p-6 border-b border-white/20">
                <div className="flex justify-between">
                    <BellIcon />
                    <span className="text-base mx:text-nowrap text-wrap ">Tắt thông báo về tin nhắn</span>
                    <Switch />
                </div>
            </div>
            <div className="flex-grow border-b border-white/20">
                <div className="p-6">
                    <h1 className="text-base font-bold">Thành viên</h1>
                </div>
                <div>
                    <DetailUser UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nguyen_huan" />
                </div>
            </div>
            <div className="py-2 px-6">
                <div className="py-4">
                    <span className="text-red-600 cursor-pointer text-base">Báo cáo</span>
                </div>
                <div className="py-4">
                    <span className="text-red-600 cursor-pointer text-base">Chặn</span>
                </div>
                <div className="py-4">
                    <span className="text-red-600 cursor-pointer text-base">Xóa đoạn chat</span>
                </div>
            </div>
        </div>
    )
}

export default DetailChat