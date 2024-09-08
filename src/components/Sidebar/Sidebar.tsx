import React from 'react';
import { Logo, LogoMobile } from '~/assets/logo';
import { HomeIcon, SearchIcon, DiscoveryIcon, ReelIcon, MessengerIcon, NotificationIcon, PlusIcon, SettingIcon } from '~/assets/SidebarIcon';
import Avatar from '~/assets/avatar.jpg';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

type ItemSidebarProps = {
    icon: React.ReactNode
    title: string
    path?: string 
    onClick?: () => void
}
const dataSidebar = [
    {
        icon: <HomeIcon className="" />,
        title: "Trang chủ",
        path: "/"
    },
    {
        icon: <SearchIcon className="" />,
        title: "Tìm kiếm",
    },
    {
        icon: <DiscoveryIcon className="" />,
        title: "Khám phá",
        path: "/discovery"
    },
    {
        icon: <ReelIcon className="" />,
        title: "Reels",
        path: "/reels"
    },
    {
        icon: <MessengerIcon className="" />,
        title: "Tin nhắn",
        path: "/messenger"
    },
    {
        icon: <NotificationIcon className="" />,
        title: "Thông báo",
    },
    {
        icon: <PlusIcon className="" />,
        title: "Tạo",
    },
    {
        icon: <img src={Avatar} className="w-6 h-6 object-cover rounded-full" />,
        title: "Trang cá nhân",
        path: "/profile"
    },
]
const ItemSidebar: React.FC<ItemSidebarProps> = ({ icon, title, path }) => {
    return (
        <div className="xl:w-55 py-1">
            <Link to={path || ""}>
                <div className="xl:w-55 flex items-center justify-start p-3 cursor-pointer gap-4 hover:bg-gray-300/20 rounded-lg">
                    <div>{icon}</div>
                    <span className="hidden xl:block group-hover:block">{title}</span>
                </div>
            </Link>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className="h-full sidebar p-3 border-r border-white/20 flex flex-col">
            <div className="xl:w-55 pt-6 pb-4 px-3 mb-5">
                <Link to="/" className="">
                    <Logo className="hidden xl:block" />
                    <LogoMobile className="block xl:hidden" />
                </Link>
            </div>
            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col">
                    {dataSidebar.map((item, index) => (
                        <ItemSidebar
                            key={index}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </div>
                <ItemSidebar
                    icon={<SettingIcon className="" />}
                    title="Xem thêm"
                    path=""
                />
            </div>
        </div>
    )
}


export default Sidebar