import { useState } from 'react';
import { Logo, LogoMobile } from '~/assets/logo';
import { HomeIcon, SearchIcon, DiscoveryIcon, ReelIcon, MessengerIcon, NotificationIcon, PlusIcon, SettingIcon } from '~/assets/SidebarIcon';
import Avatar from '~/assets/avatar.jpg';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import Search from '../Search/Search';
import ItemSidebar from './Components/ItemSidebar';
import Notification from '../Notification/Notification';
import SettingDrop from '../Setting/SettingDrop/SettingDrop';
import CreatePost from '../CreatePosts/CreatePost';


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
];

const Sidebar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSettingDropOpen, setIsSettingDropOpen] = useState(false);
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick = (title: string) => {
        if (title === "Tìm kiếm") {
            setIsSearchOpen(prev => !prev);
            setActiveItem(prev => (prev === title ? null : title));
            setIsNotificationOpen(false); 
            setIsCreatePostOpen(false)
        } else if (title === "Thông báo") {
            setIsNotificationOpen(prev => !prev);
            setActiveItem(prev => (prev === title ? null : title));
            setIsSearchOpen(false); 
            setIsCreatePostOpen(false)
        } else if (title === "Tạo") {
            setIsCreatePostOpen(prev => !prev);
            setActiveItem(prev => (prev === title ? null : title));
            setIsSearchOpen(false);
            setIsNotificationOpen(false) 
        }
        else {
            setIsSearchOpen(false);
            setIsNotificationOpen(false);
            setActiveItem(title); // Set clicked item as active and reset others
        }
    };
    const handleCloseCreatePost = () => {
        setIsCreatePostOpen(false);  
        setActiveItem(null)
    };
    const handleOpenSettingDrop = () => {
        setIsSettingDropOpen(prev => !prev)
    }


    return (
        <div className="fixed flex h-screen">
            <div className={`h-full sidebar p-3 border-r border-white/20 flex flex-col ${isSearchOpen || isNotificationOpen ? 'sidebar-closed' : ''}`}>
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
                                isActive={item.title === activeItem}
                                onClick={() => handleItemClick(item.title)}
                            />
                        ))}
                    </div>
                    <ItemSidebar
                        icon={<SettingIcon className="" />}
                        title="Xem thêm"
                        path=""
                        isActive={activeItem === "Xem thêm"}
                        onClick={handleOpenSettingDrop}
                    />
                </div>

            </div>
            {isSearchOpen && <Search />} {/* Show SearchComponent when open */}
            {isNotificationOpen && <Notification />}
            {isSettingDropOpen && <SettingDrop />}
            {isCreatePostOpen && <CreatePost onClose={handleCloseCreatePost} />}
        </div>
    );
}

export default Sidebar;
