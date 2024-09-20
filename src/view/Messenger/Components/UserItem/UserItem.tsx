import React, { useState } from "react";
import { IUser } from "~/store/User/User";
import './UserItem.scss'

const UserItem: React.FC<IUser> = ({ UserAvatar, UserID, UserName }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsChecked(prev => !prev);
    };

    return (
        <div className="w-full px-4 py-2 hover:bg-white/10">
            <div
                className="w-full h-11 flex justify-between items-center  cursor-pointer"
                onClick={handleCheckboxClick}
            >
                <div className="w-full flex gap-3">
                    <div className="w-11 h-11 flex-shrink-0">
                        <img src={UserAvatar} className="w-full h-full object-cover rounded-full" alt="User Avatar" />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center">
                        <span className="text-sm text-ig-primary-text font-bold">{UserName}</span>
                        <span className='text-sm text-ig-secondary-text text-nowrap'>{UserID}</span>
                    </div>
                </div>
                <div>
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={() => setIsChecked(prev => !prev)}
                    />
                    <span className={`checkbox-custom ${isChecked ? 'bg-white' : 'bg-transparent'}`}></span>
                </div>
            </div>
        </div>
    );
}

export default UserItem;
