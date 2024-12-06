import LayoutMain from "~/layouts/LayoutMain";
import Avatar from '~/assets/avatar.jpg';
import './Profile.scss';
import Button from "~/components/Button/Button";
import { SetingDropIcon } from "~/assets/SettingIcon";
import { PlusIcon, PostIcon, SavedIcon, UserTagIcon } from "~/assets";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Article from "./Components/Article";
import Footer from "~/components/Footer/Footer";
import Saved from "./Components/Saved";
import UserTag from "./Components/UserTag";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
    _id: string;
    username: string;
    avatar: string;
    // Bạn có thể thêm các trường khác nếu cần
}

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);  // Chỉ lưu 1 người dùng
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const userId = localStorage.getItem('userID');  // Get userId from localStorage
        const token = localStorage.getItem('authToken');
        if (userId) {
            const fetchUser = async () => {
                try {
                    const response = await fetch(`https://dacnbe.onrender.com/user/getUserById?userId=${userId}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "*/*",
                            "Accept-Encoding": "gzip, deflate, br",
                            "Connection": "keep-alive",
                            "token": `Bearer ${token}`
                        },
                    });
                    const data = await response.json();  // Parse the response body as JSON
                    setUser(data);  // Update the user state with the fetched data
                    console.log("Fetch successful", data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            };

            fetchUser();
        }
    }, []);  // Run only once when the component mounts


    return (
        <LayoutMain>
            <section className="w-full h-full">
                <main className="w-full h-full flex flex-col items-center flex-grow">
                    <div className="custom-profile lg:w-full mb-[30px]">
                        <header className="max-w-full w-auto border-b border-white/10 pb-10">
                            <div className="w-full h-auto flex gap-10 items-center">
                                <div className="w-[150px] h-[150px] flex-shrink-0">
                                    <img
                                        src={user?.avatar || Avatar}  // Hiển thị avatar của người dùng hoặc ảnh mặc định
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="h-auto flex flex-col gap-3">
                                    <div className="w-full h-10 flex items-center lg:gap-5 gap-2">
                                        <span className="lg:text-xl">{user?.username || 'Tên người dùng'}</span>
                                        <Button title="Chỉnh sửa trang cá nhân" link="" />
                                        <Button title="Xem kho lưu trữ" link="" />
                                        <div className="cursor-pointer">
                                            <SetingDropIcon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="h-10 w-full flex gap-10 items-center">
                                        <div className="flex gap-1 lg:text-base text-sm">
                                            <span>1000 bài viết</span>
                                        </div>
                                        <div className="flex gap-1 lg:text-base text-sm cursor-pointer">
                                            <span>10000 người theo dõi</span>
                                        </div>
                                        <div className="flex gap-1 lg:text-base text-sm cursor-pointer">
                                            <span>Đang theo dõi 3800000 người dùng</span>
                                        </div>
                                    </div>
                                    <div className="h-auto flex flex-col items-start">
                                        <span className="lg:text-base md:text-sm font-semibold">
                                            {user?.username || 'Tên đầy đủ'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pl-[190px] cursor-pointer lg:text-base md:text-sm">
                                <span>https://www.instagram.com/{user?.username || 'username'}</span>
                            </div>
                            <div className="h-[130px] w-full flex">
                                <div className="w-auto h-auto flex flex-col items-center justify-between py-[10px] px-[15px]">
                                    <div className="h-[88px] w-[88px] flex items-center justify-center border border-white/20 rounded-full cursor-pointer">
                                        <div className="h-[80px] w-[80px] flex items-center justify-center rounded-full bg-ig-second-button">
                                            <PlusIcon className="w-11 h-11 text-ig-tertiary-icon" />
                                        </div>
                                    </div>
                                    <span className="text-xs">Mới</span>
                                </div>
                            </div>
                        </header>
                        <div className="w-full">
                            <div className="w-full">
                                <div className="w-auto flex text-[#8E8E8E] lg:px-52 md:px-32">
                                    <Link
                                        to="/profile"
                                        className="flex-1 h-[52px] flex items-center"
                                    >
                                        <div className={`h-full flex items-center gap-2 ${currentPath === '/profile' ? 'border-t-2 border-white text-white' : ''}`}>
                                            <PostIcon />
                                            <span className="text-xs">BÀI VIẾT</span>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/profile/saved"
                                        className="flex-1 h-[52px] flex items-center"
                                    >
                                        <div className={`h-full flex items-center gap-2 ${currentPath === '/profile/saved' ? 'border-t-2 border-white text-white' : ''}`}>
                                            <SavedIcon className="w-3 h-3" />
                                            <span className="text-xs">ĐÃ LƯU</span>
                                        </div>
                                    </Link>
                                    <Link
                                        to="/profile/tagged"
                                        className="flex-1 h-[52px] flex items-center"
                                    >
                                        <div className={`h-full flex items-center gap-2 ${currentPath === '/profile/tagged' ? 'border-t-2 border-white text-white' : ''}`}>
                                            <UserTagIcon />
                                            <span className="text-xs">ĐƯỢC GẮN THẺ</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="">
                                    <Routes>
                                        <Route path="/" element={<Article />} />
                                        <Route path="/saved" element={<Saved />} />
                                        <Route path="/tagged" element={<UserTag />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Footer />
        </LayoutMain>
    );
};

export default Profile;
