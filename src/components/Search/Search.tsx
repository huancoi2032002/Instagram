import React, { useRef, useState } from "react";
import { SearchIcon, VectorX } from "~/assets";
import ItemsUser from "../ItemUser/ItemsUser";
import Avatar from '~/assets/1.jpg';


const Search = () => {

    const [searchText, setSearchText] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    };

    const handleClear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setSearchText('');
        setIsFocused(false);
        inputRef.current?.blur();
    }

    const handleClickContainer = () => {
        inputRef.current?.focus();
    }


    return (
        <div className="h-screen w-[397px] border-r border-white/20 rounded-xl">
            <div className="flex flex-col pt-6 pb-5 px-4 gap-2">
                <h1 className="text-[24px] mb-5">Tìm kiếm</h1>
                <div className="w-[364px] h-10 relative bg-[#363636] px-4 rounded-lg" onClick={handleClickContainer}>
                    <div className="w-full flex items-center gap-3">
                        {!isFocused && ( 
                            <div className="top-3">
                                <SearchIcon className="stroke-[#8E8E8E]" />
                            </div>
                        )}
                        <input
                            type="text"
                            ref={inputRef}
                            className="w-full h-10 rounded-lg bg-transparent outline-none"
                            placeholder="Tìm kiếm"
                            onChange={handleChange}
                            value={searchText}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)} 
                        />
                    </div>
                    {(isFocused || searchText) && (
                        <div
                            className="w-4 h-4 bg-[#A8A8A8] rounded-full flex items-center justify-center absolute right-3 top-3 cursor-pointer"
                            onClick={handleClear}
                        >
                            <VectorX className="size-2 fill-[#000] stroke-[#000]" />
                        </div>
                    )}
                </div>
            </div>
            {!isFocused && (
                <div className="mt-[6px]  flex flex-col gap-5 border-t border-white/20">
                    <div className="flex justify-between pt-1 mb-2 mx-6 mt-4">
                        <h1>Gần đây</h1>
                        <div className="text-[#0095F6] text-sm hover:text-[#FFF] cursor-pointer">Xóa tất cả</div>
                    </div>
                    <div className="">
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                        <ItemsUser UserID="nauh_nguyen" UserAvatar={Avatar} UserName="Nguyễn Hữu Huân" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search