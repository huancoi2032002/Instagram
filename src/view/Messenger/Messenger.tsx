import LayoutMain from "~/layouts/LayoutMain";
import ItemUserMessenger from "./Components/ItemUserMessenger/ItemUserMessenger";
import { DownArrowIcon, EditUSerIcon } from "~/assets";
import NgocDiep from '~/assets/3.jpg';
import './Messenger.scss'
import { useState } from "react";
import NewMessenger from "./Components/NewMessenger/NewMessenger";
import ChatWithFriend from "./Components/ChatWithFriend/ChatWithFriend";

const Messenger = () => {

    const [openNewMessenger, setOpenNewMessenger] = useState(false);

    const handOpenNewMessenger = () => {
        setOpenNewMessenger(prev => !prev)
    }
    const handCloseNewMessenger = () => {
        setOpenNewMessenger(false)
    }

    return (
        <LayoutMain>
            <div className="w-full h-screen flex">
                <div className="mx:w-[397px] flex flex-col h-full border-r border-white/20">
                    <div className="w-full pt-8 px-6 pb-3 flex items-center justify-between">
                        <div className="w-auto h-auto mx:block hidden">
                            <div className="flex items-center gap-3  ">
                                <span className="text-xl font-bold">nauh_nguyn</span>
                                <DownArrowIcon className="rotate-180 w-3 h-3 text-ig-secondary-text" />
                            </div>
                        </div>
                        <div className="p-2 w-10 h-10 cursor-pointer" onClick={handOpenNewMessenger}>
                            <EditUSerIcon />
                        </div>
                    </div>
                    <div className="h-[140px] pl-4 mx:block hidden">
                        <div className="h-full flex flex-col justify-end">
                            <div className="w-[74px] h-[74px] relative">
                                <img src={NgocDiep} className="w-full h-full object-cover rounded-full" />
                                <div className="absolute top-[-34px]">
                                    <div className="relative p-2 bg-ig-elevated-background text-ig-secondary-text text-xs rounded-[14px] ">
                                        <div className="min-w-4 py-2">
                                            Ghi chú...
                                        </div>
                                        <div className="absolute w-2 h-1 bottom-[-3px] left-3 bg-ig-elevated-background rounded-b-2xl"></div>
                                    </div>
                                </div>
                            </div>
                            <div><span className="text-xs text-ig-secondary-text">Ghi chú của bạn</span></div>
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-scroll scrollbar-always">
                        <div className="w-auto h-auto mx:block hidden">
                            <div className="w-full flex justify-between items-center pt-[14px] pb-[10px] px-6  ">
                                <span className="text-base font-bold"><h1>Tin nhắn</h1></span>
                                <span className="text-sm text-ig-secondary-text cursor-pointer">Tin nhắn đang chờ</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                            <ItemUserMessenger UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nauh_nguyn" />
                        </div>
                    </div>
                </div>
                {/*Giao diện này khi mới vô chat
                <div className="w-full h-full flex items-center justify-center">
                    
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div>
                            <CanvasMessengerIcon />
                        </div>
                        <span className="text-xl">Tin nhắn của bạn</span>
                        <span className="text-sm text-ig-secondary-text">Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm</span>
                        <div className="px-4 py-1 bg-ig-primary-button rounded-lg cursor-pointer hover:bg-ig-primary-button-hover" onClick={handOpenNewMessenger}>Gửi tin nhắn</div>
                    </div>
                    
                    
                </div>
                */}
                <div className="w-full h-screen">
                    <ChatWithFriend UserAvatar={NgocDiep} UserName="Huu Huan" UserID="nguyen_huan" isActive={false} />
                </div>
                {openNewMessenger && (
                    <NewMessenger onClose={handCloseNewMessenger} />
                )}
            </div>
        </LayoutMain>
    );
};

export default Messenger;
