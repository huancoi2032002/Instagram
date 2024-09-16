import React from "react";
import LayoutMain from "~/layouts/LayoutMain";
import { BellIcon, CommentIcon, HiddenIcon, HiddenWordIcon, LimitedAccountIcon, LockIcon, ShareIcon2, StarIcon, TagIcon, UserIcon } from "~/assets";
import { Link } from "react-router-dom";
import { MessengerIcon } from "~/assets/SidebarIcon";

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
                <div>
                    <div className="w-[247px] py-3 px-4 ">
                        <span  className="text-xs text-ig-secondary-text">Cách người khác có thể tương tác với bạn</span>
                    </div>
                    <ItemSetting icon={<MessengerIcon />} title="Tin nhắn và lượt phản hồi tin" />
                    <ItemSetting icon={<TagIcon />} title="Thẻ và lượt nhắc" />
                    <ItemSetting icon={<CommentIcon />} title="Bình luận" />
                    <ItemSetting icon={<ShareIcon2 />} title="Chia sẻ" />
                    <ItemSetting icon={<LimitedAccountIcon />} title="Tài khoản bị hạn chế" />
                    <ItemSetting icon={<HiddenWordIcon />} title="Từ bị ẩn" />
                </div>
            </div>
        </LayoutMain>
     );
}
 
export default Setting;