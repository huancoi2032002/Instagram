import LayoutMain from "~/layouts/LayoutMain";
import Avatar from '~/assets/avatar.jpg';
import './Profile.scss';
import Button from "~/components/Button/Button";
import { SetingDropIcon } from "~/assets/SettingIcon";
import { AddUser, PlusIcon, PostIcon, SavedIcon, UserTagIcon } from "~/assets";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Article from "./Components/Article";
import Footer from "~/components/Footer/Footer";
import Saved from "./Components/Saved";
import UserTag from "./Components/UserTag";
import { useEffect, useState } from "react";
import { User } from "~/store/User/User";

const API_BASE_URL = "https://dacnbe.onrender.com";

// Hàm lấy thông tin người dùng
export const fetchUser = async (userId: string, token: string): Promise<any> => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/getUserById?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

// Hàm lấy danh sách người đang theo dõi
export const fetchFollowing = async (userId: string, token: string): Promise<any> => {
    try {
        const response = await fetch(`${API_BASE_URL}/relationship/getFollowing?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data as User[];
    } catch (error) {
        console.error("Error fetching following:", error);
        throw error;
    }
};

// Hàm lấy danh sách người theo dõi
export const fetchFollower = async (userId: string, token: string): Promise<any> => {
    try {
        const response = await fetch(`${API_BASE_URL}/relationship/getFollower?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": `Bearer ${token}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching followers:", error);
        throw error;
    }
};

const Profile = () => {
    const { userId: paramUserId } = useParams(); // Lấy userId từ URL params
    const [user, setUser] = useState<User | null>(null);
    const [followers, setFollowers] = useState<any[]>([]); // Lưu trữ danh sách người theo dõi
    const [following, setFollowing] = useState<any[]>([]); // Lưu trữ danh sách người đang theo dõi

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Xác định userId (user đang xem profile, nếu là người dùng đã đăng nhập thì lấy từ localStorage)
        const userId = paramUserId || localStorage.getItem('userID'); // Lấy userId từ URL hoặc localStorage
        const token = localStorage.getItem('authToken');

        if (userId && token) {
            // Fetch thông tin người dùng
            const loadUserData = async () => {
                try {
                    const userData = await fetchUser(userId, token);
                    const followingData = await fetchFollowing(userId, token);
                    const followerData = await fetchFollower(userId, token);

                    setUser(userData);
                    setFollowing(followingData);
                    setFollowers(followerData);
                } catch (error) {
                    console.error("Error loading user data:", error);
                }
            };

            loadUserData();
        }
    }, [paramUserId]); // Chạy lại khi userId trong URL thay đổi

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
                                        {paramUserId ? (
                                            <div className="w-auto h-auto flex items-center gap-4">
                                                <button className="xl:h-8 h-auto px-4 text-sm bg-ig-primary-button rounded-md">Theo dõi</button>
                                                <button className="xl:h-8 h-auto px-4 text-sm bg-ig-bg-button rounded-md"><AddUser /></button>
                                            </div>
                                        ) : (
                                            <div className="flex gap-4">
                                                <Button title="Xem kho lưu trữ" link="" />
                                                <Button title="Chỉnh sửa trang cá nhân" link="" />
                                            </div>

                                        )}
                                        <div className="cursor-pointer">
                                            <SetingDropIcon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="h-10 w-full flex gap-10 items-center">
                                        <div className="flex gap-1 lg:text-base text-sm">
                                            <span>0 bài viết</span>
                                        </div>
                                        <div className="flex gap-1 lg:text-base text-sm cursor-pointer">
                                            <span>{followers.length} người theo dõi</span> {/* Hiển thị số người theo dõi */}
                                        </div>
                                        <div className="flex gap-1 lg:text-base text-sm cursor-pointer">
                                            <span>{following.length} Đang theo dõi</span> {/* Hiển thị số người đang theo dõi */}
                                        </div>
                                    </div>

                                    <div className="h-auto flex flex-col items-start">
                                        <span className="lg:text-base md:text-sm font-semibold">
                                            {user?.fullname || 'Tên đầy đủ'}
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
                                        <Route path="*" element={<Article userId={paramUserId}/>} />
                                        <Route path="saved" element={<Saved />} />
                                        <Route path="tagged" element={<UserTag />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </section>
        </LayoutMain>
    );
};

export default Profile;
