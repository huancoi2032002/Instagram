import React from "react";
import LayoutMain from "~/layouts/LayoutMain";
import {
    AccountNotificationOffIcon,
    AccountStatusIcon,
    BanIcon,
    BellIcon,
    CommentIcon,
    ContentOptionIcon,
    HelpIcon,
    HiddenIcon,
    HiddenWordIcon,
    LanguageIcon,
    LikeAndShareIcon,
    LimitedAccountIcon,
    LockIcon,
    MonitorIcon,
    PermissionWebsiteIcon,
    PrivacyCenterIcon,
    ShareIcon2,
    StarIcon,
    StoreAndDownloadIcon,
    SubscriptionPackageIcon,
    TagIcon,
    ToolsAndAccountTypesIcon,
    UserIcon,
} from "~/assets";
import { Link } from "react-router-dom";
import { MessengerIcon } from "~/assets/SidebarIcon";
import UserEdit from "./Components/UserEdit";

interface SettingProps {
    icon: React.ReactNode;
    title: string;
    link?: string;
}

const ItemSetting: React.FC<SettingProps> = ({ icon, title, link }) => {
    return (
        <div className="w-[247px] py-3 px-4 hover:bg-white/20 rounded-lg cursor-pointer">
            <Link to={link || ""} className=" ">
                <div className="flex items-center gap-3">
                    <div>{icon}</div>
                    <div>
                        <span className="text-sm text-ig-primary-text">{title}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const Setting = () => {
    return (
        <LayoutMain>
            <div className="flex">
                <div className="flex flex-col gap-3 px-8">
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Cách bạn dùng Instagram
                            </span>
                        </div>
                        <ItemSetting icon={<UserIcon />} title="Chỉnh sửa trang cá nhân" />
                        <ItemSetting icon={<BellIcon />} title="Thông báo" />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Ai có thể xem nội dung của bạn
                            </span>
                        </div>
                        <ItemSetting
                            icon={<LockIcon />}
                            title="Quyền riêng tư của tài khoản"
                        />
                        <ItemSetting icon={<StarIcon />} title="Bạn thân" />
                        <ItemSetting icon={<BanIcon />} title="Đã chặn" />
                        <ItemSetting
                            icon={<HiddenIcon />}
                            title="Ẩn tin và video trực tiếp"
                        />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Cách người khác có thể tương tác với bạn
                            </span>
                        </div>
                        <ItemSetting
                            icon={<MessengerIcon />}
                            title="Tin nhắn và lượt phản hồi tin"
                        />
                        <ItemSetting icon={<TagIcon />} title="Thẻ và lượt nhắc" />
                        <ItemSetting icon={<CommentIcon />} title="Bình luận" />
                        <ItemSetting icon={<ShareIcon2 />} title="Chia sẻ" />
                        <ItemSetting
                            icon={<LimitedAccountIcon />}
                            title="Tài khoản bị hạn chế"
                        />
                        <ItemSetting icon={<HiddenWordIcon />} title="Từ bị ẩn" />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Nội dung bạn nhìn thấy
                            </span>
                        </div>
                        <ItemSetting
                            icon={<AccountNotificationOffIcon />}
                            title="Tài khoản đã tắt thông báo"
                        />
                        <ItemSetting
                            icon={<ContentOptionIcon />}
                            title="Tùy chọn nội dung"
                        />
                        <ItemSetting
                            icon={<LikeAndShareIcon />}
                            title="Số lượt thích và chia sẻ"
                        />
                        <ItemSetting
                            icon={<SubscriptionPackageIcon />}
                            title="Gói đăng ký"
                        />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Ứng dụng và file phương tiện của bạn
                            </span>
                        </div>
                        <ItemSetting
                            icon={<StoreAndDownloadIcon />}
                            title="Lưu trữ và tải xuống"
                        />
                        <ItemSetting icon={<LanguageIcon />} title="Ngôn ngữ" />
                        <ItemSetting
                            icon={<PermissionWebsiteIcon />}
                            title="Quyền trên trang web"
                        />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Dành cho gia đình
                            </span>
                        </div>
                        <ItemSetting icon={<MonitorIcon />} title="Giám sát" />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Dành cho chuyên gia
                            </span>
                        </div>
                        <ItemSetting
                            icon={<ToolsAndAccountTypesIcon />}
                            title="Công cụ và loại tài khoản"
                        />
                    </div>
                    <div>
                        <div className="w-[247px] py-3 px-4 ">
                            <span className="text-xs text-ig-secondary-text">
                                Thông tin khác và hỗ trợ
                            </span>
                        </div>
                        <ItemSetting icon={<HelpIcon />} title="Trợ giúp" />
                        <ItemSetting
                            icon={<PrivacyCenterIcon />}
                            title="Trung tâm quyền riêng tư"
                        />
                        <ItemSetting
                            icon={<AccountStatusIcon />}
                            title="Trạng thái tài khoản"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <UserEdit UserID={""} UserAvatar={""} />
                </div>
            </div>
        </LayoutMain>
    );
};

export default Setting;
