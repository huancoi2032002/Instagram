import { SetingDropIcon, ActivityIcon, SwitchIcon, ReportIcon } from "~/assets/SettingIcon";
import { SavedIcon } from "~/assets";
import ItemSetting from "./ItemSetting";
import { useState } from "react";
import SwitchAccount from "~/components/SwitchAccount/SwitchAccount";



const dataItemSetting = [
    {
        icon: <SetingDropIcon className="" />,
        title: 'Cài đặt',
        path: "/setting/edit",
    },
    {
        icon: <ActivityIcon className="" />,
        title: 'Hoạt động của bạn',
        path: '/your_activity',
    },
    {
        icon: <SavedIcon className="fill-none" />,
        title: 'Đã lưu',
        path: '/saved',
    },
    {
        icon: <SwitchIcon className="" />,
        title: 'Chuyển chế độ',
        onClick: () => console.log('Switching mode'),
    },
    {
        icon: <ReportIcon className="" />,
        title: 'Báo cáo sự cố',
        onClick: () => console.log('Reporting issue'),
    },
];

const SettingDrop = () => {

    const [openSwitchAccount, setOpenSwitchAccount] = useState(false);
    
    const handleOpen = () => {
        setOpenSwitchAccount(prev => !prev)
    }
    const handleClose = () => {
        setOpenSwitchAccount(false)
    }

    return (
        <div className="max-h-[405px] bg-[#262626] rounded-lg absolute xl:left-3 left-16 xl:bottom-20 bottom-6">
            <div className="p-2">
                <div className="flex flex-col">
                    {dataItemSetting.map((item, index) => (
                        <ItemSetting
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            path={item.path}
                            onClick={item.onClick} 
                        />
                    ))}
                </div>
            </div>
            <div className="h-1 bg-[#555555]/30"></div>
            <div className="p-2 border-b border-white/10">
                <div
                    className="w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm"
                    onClick={handleOpen}
                >
                    <div>Chuyển tài khoản</div>
                </div>
            </div>
            <div className="p-2">
                <div
                    className="w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm"
                    onClick={() => console.log('Đăng xuất')}
                >
                    <div>Đăng xuất</div>
                </div>
            </div>
            {openSwitchAccount && (
                <SwitchAccount onClose={handleClose} />
            )}
        </div>
    );
};

export default SettingDrop;
