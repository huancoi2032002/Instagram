import React from "react";
import LayoutMain from "~/layouts/LayoutMain";
import { BellIcon, HiddenIcon, LockIcon, StarIcon, UserIcon } from "~/assets";
import { Link } from "react-router-dom";

interface SettingProps {
    icon: React.ReactNode
    title: string
    link?: string
}

const ItemSetting: React.FC<SettingProps> = ({icon, title, link}) => {
    return(
        
            <div className="w-[247px] py-3 px-4 hover:bg-white/20 rounded-lg cursor-pointer">
                <Link to={link || ""} className=" ">
                <div className="flex items-center gap-3">
                    <div>
                        {icon}
                    </div>
                    <div>
                        <span className="text-sm text-ig-primary-text">{title}</span>
                    </div>
                </div>
                </Link>
            </div>
        
    )
}

const Setting = () => {
    return ( 
        <LayoutMain>
            <div>
                <div>
                    <div className="w-[247px] py-3 px-4 ">
                        <span  className="text-xs text-ig-secondary-text">Cách bạn dùng Instagram</span>
                    </div>
                    <ItemSetting icon={<UserIcon />} title="Chỉnh sửa trang cá nhân" />
                    <ItemSetting icon={<BellIcon />} title="Thông báo" />
                </div>  
                <div>
                    <div className="w-[247px] py-3 px-4 ">
                        <span  className="text-xs text-ig-secondary-text">Ai có thể xem nội dung của bạn</span>
                    </div>
                    <ItemSetting icon={<LockIcon />} title="Quyền riêng tư của tài khoản" />
                    <ItemSetting icon={<BellIcon />} title="Bạn thân" />
                    <ItemSetting icon={<StarIcon />} title="Đã chặn" />
                    <ItemSetting icon={<HiddenIcon />} title="Ẩn tin và video trực tiếp" />
                </div>
            </div>
        </LayoutMain>
     );
}
 
export default Setting;