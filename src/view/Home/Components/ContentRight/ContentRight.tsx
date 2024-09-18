import React from 'react';
import './ContentRight.scss';
import { IUser } from '~/store/User/User';
import NgocDiep from '~/assets/7.jpg'
import OnclickText from '~/components/OnclickText/OnclickText';
import { Link } from 'react-router-dom';

const ItemUserRight: React.FC<IUser> = ({ UserID, UserAvatar }) => {
    return (
        <div className="w-full px-4 py-2">
            <div className="w-full h-11 flex justify-between items-center cursor-pointer">
                <div className="w-full flex gap-3">
                    <div className="w-11 h-11 flex-shrink-0">
                        <img src={UserAvatar} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center">
                        <span className="text-sm text-ig-primary-text font-bold">{UserID}</span>
                        <span className='text-xs text-ig-secondary-text text-nowrap'>Đang theo dõi ngocmeomeo</span>
                    </div>
                </div>
                <div>
                    <OnclickText initialLabel="Theo dõi" activeLabel="Đang theo dõi" />
                </div>
            </div>
        </div>
    )
}


const ContentRight = () => {
    return (
        <div className="w-[383px] pl-16 custom-contentright">
            <div className="w-[315px] flex flex-col gap-6">
                <div className="w-full h-11  px-4 flex justify-between items-center">
                    <div className="w-full flex gap-3">
                        <div className="w-11 h-11 flex-shrink-0">
                            <img src={NgocDiep} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="w-full h-full flex flex-col justify-center">
                            <span className="text-sm text-ig-primary-text font-bold">nauh_nguyn</span>
                            <span className='text-sm text-ig-secondary-text'>Nguyễn Hữu Huân</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-xs text-ig-primary-button cursor-pointer hover:text-white">Chuyển</span>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center px-4">
                        <span className="text-sm text-ig-secondary-text font-bold">Gợi ý cho bạn</span>
                        <span className="text-xs hover:text-ig-secondary-text cursor-pointer">Xem tất cả</span>
                    </div>
                    <div className="">
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                        <ItemUserRight UserID="ngocmeomeo" UserAvatar={NgocDiep} />
                    </div>
                </div>
                <div className="w-full px-4 flex flex-col gap-6">
                    <div className="flex flex-wrap">
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Giới thiệu</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Trợ giúp</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Báo chí</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">API</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Việc làm</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Quyền riêng tư</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Điều khoản</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Vị trí</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Ngôn ngữ</span></Link>
                        <Link to=""><span className="text-xs text-ig-secondary-text pr-2">Meta đã xác minh</span></Link>
                    </div>
                    <span className="text-xs text-ig-secondary-text">© 2024 INSTAGRAM FROM META</span>
                </div>
            </div>
        </div>
    )
}

export default ContentRight