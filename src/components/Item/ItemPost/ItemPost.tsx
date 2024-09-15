import React from "react";
import { FavouriteIcon, CommentIcon } from "~/assets";
import './ItemPost.scss'

type ItemPostProps = {
    img: string
    className?: string;
}

const ItemPost:React.FC<ItemPostProps> = ({img, className}) => {
    return (
        <div className={`image-container group cursor-pointer ${className}`}>   
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute w-full h-full left-0 top-0 z-20 flex justify-center items-center lg:gap-8 md:gap-4 bg-black/40 hidden group-hover:flex">
                <div className="flex items-center gap-1">
                    <FavouriteIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">16.2N</span>
                </div>
                <div className="flex items-center gap-1">
                    <CommentIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">109</span>
                </div>
            </div>
        </div>
    )
}

export default ItemPost