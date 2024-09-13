import React, { useState } from "react";
import { Link } from "react-router-dom";
import {EmojisIcon, MapIcon, StaffIcon, DownArrowIcon } from "~/assets";
import AvatarImg from '~/assets/avatar.jpg'

const CreateNewPost = () => {

    const [isOpenAccess, setIsOpenAccess] = useState(false);
    const [isOpenAdvancedSettings, setIsOpenAdvancedSettings] = useState(false);
    const [countText, setCountText] = useState("");

    const onChangeCountText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value

        if(text.length <= 2200){
            setCountText(text)
        }
    }

    const handleOpenAccess = () => {
        setIsOpenAccess(!isOpenAccess)
    }
    const handleOpenAdvancedSettings = () => {
        setIsOpenAdvancedSettings(!isOpenAdvancedSettings)
    }
    return (
        <div className="w-[340px] xl:h-[711px] md:h-[487px] overflow-y-auto">
            <div className="px-4">
                <div className="flex gap-3 py-5 items-center">
                    <div className="w-7 h-7 ">
                        <img src={AvatarImg} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <span className="text-sm text-ig-primary-text">nauh_nguyen</span>
                </div>
                <textarea className="w-full max-h-[168px] h-[168px] bg-transparent outline-none text-sm resize-none"
                    value={countText}
                    onChange={onChangeCountText}

                >

                </textarea>
                <div className="py-3 flex justify-between items-center">
                    <div>
                        <EmojisIcon className="fill-[#737373]" />
                    </div>
                    <div className="text-ig-tertiary-text text-xs">
                        {countText.length}/2200
                    </div>
                </div>
                <div className="py-3 flex justify-between items-center">
                    <div className="text-ig-tertiary-text">
                        Thêm vị trí
                    </div>
                    <div className="">
                        <MapIcon className="" />
                    </div>
                </div>
                <div className="py-3 flex justify-between items-center">
                    <div className="text-ig-primary-text">
                        Thêm cộng tác viên
                    </div>
                    <div className="">
                        <StaffIcon className="" />
                    </div>
                </div>
                <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAccess}>
                    <div className="text-ig-primary-text">
                        Trợ năng
                    </div>
                    <div className="">
                        <DownArrowIcon className="" />
                    </div>
                </div>
                {isOpenAccess && (
                    <div className="dropdown">
                        <span className="text-ig-secondary-text text-xs">Văn bản thay thế mô tả ảnh cho những người suy giảm thị lực. Văn bản thay thế sẽ được tạo tự động cho ảnh của bạn hoặc bạn có thể tự viết.</span>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex gap-2">
                                <div className="w-11 h-11">
                                    <img src={AvatarImg} className="w-full h-full object-cover" />
                                </div>
                                <input type="text" className="w-full px-3 py-1 text-sm text-ig-secondary-text rounded-md bg-transparent outline-none focus:border focus:border-white/10" placeholder="Viết văn bản thay thế..." />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-11 h-11">
                                    <img src={AvatarImg} className="w-full h-full object-cover" />
                                </div>
                                <input type="text" className="w-full px-3 py-1 text-sm text-ig-secondary-text rounded-md bg-transparent outline-none focus:border focus:border-white/10" placeholder="Viết văn bản thay thế..." />
                            </div>
                        </div>
                    </div>
                )}
                <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAdvancedSettings}>
                    <div className="text-ig-primary-text">
                        Cài đặt nâng cao
                    </div>
                    <div className="">
                        <DownArrowIcon className="" />
                    </div>
                </div>
                {isOpenAdvancedSettings && (
                    <div className="dropdown flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between">
                                <span className="max-w-[252px] text-ig-primary-text text-base">Ẩn lượt thích và lượt xem trên bài viết này</span>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <p className="text-ig-tertiary-text text-xs">Chỉ bạn mới nhìn thấy tổng số lượt thích và lượt xem bài viết này. Về sau, bạn có thể thay đổi tùy chọn này bằng cách mở menu ··· ở đầu bài viết. Để ẩn số lượt thích trên bài viết của người khác, hãy đi đến phần cài đặt tài khoản. <Link to="" className="text-xs text-ig-link">Tìm hiểu thêm</Link></p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between">
                                <span className="max-w-[252px] text-ig-primary-text text-base">Tắt tính năng bình luận</span>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <p className="text-ig-tertiary-text text-xs">Về sau, bạn có thể thay đổi tùy chọn này bằng cách mở menu ··· ở đầu bài viết.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CreateNewPost