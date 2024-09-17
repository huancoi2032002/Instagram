import React, { useState } from "react";
import { IUser } from "~/store/User/User";
import ngoc1 from "~/assets/1.jpg";
import { SetingDropIcon } from "~/assets/SettingIcon";
import { DownArrowIcon } from "~/assets";
import DropDownSex from "./DropDownSex";
import "./Styles.scss";
import Footer from "~/components/Footer/Footer";

const UserEdit: React.FC<IUser> = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const handleOpenDropDown = () => {
        setOpenDropDown((prev) => !prev);
    };

    return (
        <div className="max-w-[610px]">
            <div className="py-9 mb-4 max-w-[610px] w-full">
                <div className="py-3 mb-8">
                    <h1 className="text-xl font-bold">Chỉnh sửa trang cá nhân</h1>
                </div>
                <div className="bg-ig-hightlight-background p-4 rounded-[20px] flex items-center justify-between w-full">
                    <div className="flex gap-4">
                        <div className="w-[56px] h-[56px]">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src={ngoc1}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="h-5 text-ig-primary-text font-bold">
                                trung_hoa_1712
                            </span>
                            <span className="h-5 text-sm text-ig-secondary-text">
                                Trung Hòa
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className="bg-ig-primary-button px-4 h-8 rounded-[8px] hover:bg-ig-primary-button-hover">
                            Đổi ảnh
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="py-4 flex flex-col gap-3">
                        <h1 className="text-base font-bold">Trang web</h1>
                        <div className="bg-ig-hightlight-background p-4 rounded-[20px] flex items-center justify-between w-full">
                            Trang web
                        </div>
                        <span className="text-xs text-ig-secondary-text">
                            Bạn chỉ có thể chỉnh sửa liên kết trên di động. Hãy mở ứng dụng
                            Instagram và chỉnh sửa trang cá nhân của bạn để thay đổi trang web
                            trong phần tiểu sử.
                        </span>
                    </div>
                </div>
                <div>
                    <div className="py-4">
                        <h1 className="text-base font-bold">Tiểu sử</h1>
                    </div>
                    <div className="relative">
                        <textarea
                            className="outline-none text-sm resize-none bg-transparent border border-white/20 rounded-[10px] py-[10px] pl-4 pr-[80px] w-full"
                            name=""
                            id=""
                        ></textarea>
                        <span className="absolute right-4 bottom-4 text-xs text-ig-secondary-text">
                            0/150
                        </span>
                    </div>
                </div>
                <div className="mt-3 relative">
                    <div className="py-4">
                        <h1 className="text-base font-bold ">Giới tính</h1>
                    </div>
                    <div onClick={handleOpenDropDown}>
                        <div className="p-4 flex items-center justify-between border border-white/20 rounded-[10px] cursor-pointer">
                            <span>Nam</span>
                            <div>
                                <DownArrowIcon className="rotate-180" />
                            </div>
                        </div>
                        <span className="text-xs text-ig-secondary-text">
                            Thông tin này sẽ không xuất hiện trên trang cá nhân công khai của
                            bạn.
                        </span>
                    </div>
                    {openDropDown && (
                        <div className="absolute">
                            <DropDownSex />
                        </div>
                    )}
                </div>
                <div className="mt-3">
                    <div className="py-4">
                        <h1 className="text-base font-bold">
                            Hiển thị gợi ý tài khoản trên trang cá nhân
                        </h1>
                    </div>
                    <div className="flex items-center p-4 rounded-[20px] w-full border border-white/20">
                        <div className="flex flex-col">
                            <span className="text-base">
                                Hiển thị gợi ý tài khoản trên trang cá nhân
                            </span>
                            <span className="text-xs">
                                Chọn có cho mọi người thấy các gợi ý tài khoản tương tự trên
                                trang cá nhân của bạn và có cho hệ thống gợi ý tài khoản của bạn
                                trên các trang cá nhân khác hay không.
                            </span>
                        </div>
                        <div className="w-[40px]">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-8">
                    <button className="w-[253px] h-[44px] bg-ig-primary-button px-4 rounded-[8px] hover:bg-ig-primary-button-hover">
                        Gửi
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserEdit;
