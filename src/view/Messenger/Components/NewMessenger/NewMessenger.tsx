import React from "react";
import UserItem from "../UserItem/UserItem";
import NgocDiep from '~/assets/3.jpg';
import { VectorX } from "~/assets";

type NewMessengerProps = {
    onClose: () => void
}

const NewMessenger: React.FC<NewMessengerProps> = ({ onClose }) => {
    const userItem = true; // Set to true or false based on your data

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <div className="w-[548px] h-auto bg-ig-elevated-background rounded-lg">
                <div className="w-full h-[70px] flex items-center justify-center relative">
                    <span className="text-base font-bold">Tin nhắn mới</span>
                    <div className="absolute top-6 right-0 w-[34px] h-[34px] cursor-pointer" onClick={onClose}><VectorX /></div>
                </div>
                <div className="px-4 h-[38px] flex items-center border-t border-b border-white/20">
                    <span>Tới:</span>
                    <input type="text" className="py-1 pl-3 pr-[20px] w-full outline-none bg-transparent text-sm text-ig-secondary-text" placeholder="Tìm kiếm..." />
                </div>
                <div className="h-[416px] flex-grow overflow-y-scroll scrollbar-always">
                    {userItem ? (
                        <div className="w-full flex flex-col mt-4">
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />
                            <UserItem UserAvatar={NgocDiep} UserID="nauh_nguyn" UserName="Huu Huan" />

                        </div>
                    ) : (
                        <div className="py-3 px-6">
                            <span className="text-sm text-ig-secondary-text">Không tìm thấy tài khoản.</span>
                        </div>
                    )}
                </div>
                <div className="w-full p-4">
                    <div
                        className={`w-full h-11 rounded-lg flex items-center justify-center cursor-pointer ${userItem ? 'bg-ig-primary-button hover:bg-ig-primary-button-hover' : 'bg-ig-primary-button opacity-30 cursor-not-allowed'}`}
                        onClick={userItem ? () => {/* Handle Chat click here */ } : undefined}
                    >
                        <span className="text-sm ">Chat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMessenger;
