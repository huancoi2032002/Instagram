import { SetingDropIcon, ActivityIcon, SwitchIcon, ReportIcon } from "~/assets/SettingIcon";
import { SavedIcon } from "~/assets";
import ItemSetting from "./ItemSetting";


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
        icon: <SavedIcon className="" />,
        title: 'Đã lưu',
        path: '/saved',
    },
    {
        icon: <SwitchIcon className="" />,
        title: 'Chuyển chế độ',
    },
    {
        icon: <ReportIcon className="" />,
        title: 'Báo cáo sự cố',
    },
]


const SettingDrop = () => {
    return (
        <div className="max-h-[405px] bg-[#262626] rounded-lg absolute xl:left-3 left-16 xl:bottom-20 bottom-6">
            <div className="p-2">
                <div className="flex flex-col">
                    {dataItemSetting.map(item => (
                        <ItemSetting
                            icon={item.icon}
                            title={item.title}
                            path={item.path}
                        />
                    ))}
                </div>
            </div>
            <div className="h-1 bg-[#555555]/30"></div>
            <div className="p-2 border-b border-white/10">
                <div className="w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm">
                    <div>Chuyển tài khoản</div>
                </div>
            </div>
            <div className="p-2">
                <div className="w-[250px] flex items-center gap-3 p-4 hover:bg-gray-400/20 rounded-lg cursor-pointer text-sm">
                    <div>Đăng xuất</div>
                </div>
            </div>
        </div>
    )
}

export default SettingDrop