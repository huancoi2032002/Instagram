import React from 'react';
import { Link } from 'react-router-dom';
import './ItemSidebar.scss';

type ItemSidebarProps = {
    icon: React.ReactNode;
    title: string;
    path?: string;
    isActive?: boolean;
    onClick?: () => void;
};

const ItemSidebar: React.FC<ItemSidebarProps> = ({ icon, title, path, onClick, isActive }) => {


    return (
        <div className="xl:w-55 py-1">
            {path ? (
                <Link to={path} onClick={onClick}>
                    <div className={`xl:w-55 flex items-center justify-start p-3 cursor-pointer gap-4 hover:bg-gray-300/20 rounded-lg ${isActive ? 'activeItemSidebar  ' : ''}`}>

                        {icon}

                        <span className={`hidden xl:block`}>
                            {title}
                        </span>
                    </div>
                </Link>
            ) : (
                <div onClick={onClick} className={`xl:w-55 flex items-center justify-start p-3 cursor-pointer gap-4 hover:bg-gray-300/20 rounded-lg ${isActive ? ' activeItemSidebar border' : ''}`}>
                    {icon}
                    <span className={`hidden xl:block `}>
                        {title}
                    </span>
                </div>
            )}
        </div>
    );
}

export default ItemSidebar;
