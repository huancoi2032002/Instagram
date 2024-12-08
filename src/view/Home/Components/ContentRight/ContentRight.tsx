import React, { useEffect, useState } from 'react';
import './ContentRight.scss';
import { User } from '~/store/User/User';
import NgocDiep from '~/assets/7.jpg'
import OnclickText from '~/components/OnclickText/OnclickText';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useFollowUser from '~/Hook/useFollowUser';
import { fetchFollowing } from '~/view/Profile/Profile';
import { useNavigate } from 'react-router-dom';


const ItemUserRight: React.FC<User> = ({ _id, username, avatar, fullname }) => {
    const userId = localStorage.getItem('userID');
    const navigate = useNavigate(); // Hook điều hướng
    const { isFollowing, followUser, loading, error } = useFollowUser();

    // Hàm xử lý khi nhấn vào item
    const handleNavigateToProfile = () => {
        navigate(`/profile/${_id}`);
    };

    return (
        <div
            className="w-full px-4 py-2 hover:bg-white/40"
            key={_id}
            onClick={handleNavigateToProfile} // Gọi hàm điều hướng khi click vào
        >
            <div className="w-full h-11 flex justify-between items-center cursor-pointer">
                <div className="w-full flex gap-3">
                    <div className="w-11 h-11 flex-shrink-0">
                        <img src={avatar} className="w-full h-full object-cover rounded-full" alt={username} />
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center">
                        <span className="text-sm text-ig-primary-text font-bold">{username}</span>
                        <span className="text-xs text-ig-secondary-text">{fullname}</span>
                    </div>
                </div>
                <div
                    onClick={(e) => {
                        e.stopPropagation(); // Ngăn chặn sự kiện click tràn sang parent
                        followUser(userId, _id); // Gọi hàm follow
                    }}
                >
                    <OnclickText
                        initialLabel={isFollowing ? "Đang theo dõi" : "Theo dõi"}
                        activeLabel={isFollowing ? "Đang theo dõi" : "Theo dõi"}
                        onClick={() => { }}
                    />
                </div>
            </div>
        </div>
    );
};




const ContentRight = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [following, setFollowing] = useState<User[]>([]);

    useEffect(() => {

        const fetchUsers = async () => {

            try {
                const userId = localStorage.getItem("userID"); // Lấy userId từ localStorage
                const token = localStorage.getItem("authToken");
                if (!userId || !token) {
                    console.error("User ID or token not found");
                    return;
                }
                // Lấy danh sách following
                const followingData = await fetchFollowing(userId, token);
                setFollowing(followingData);

                const userResponse = await axios.get("https://dacnbe.onrender.com/user/getAllUsers");
                const allUsers = userResponse.data;

                const filteredUsers = allUsers.filter(
                    (user: User) => !followingData.some((f: User) => f._id === user._id)
                );
                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);


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
                        {users.map(user => (
                            <ItemUserRight
                                key={user._id}
                                _id={user._id}
                                username={user.username}
                                fullname={user.fullname}
                                avatar={user.avatar || NgocDiep}
                            />
                        ))}
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