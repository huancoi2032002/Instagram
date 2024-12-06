import { CameraIcon, CommentIcon, FavouriteIcon, LoveIcon } from "~/assets";
import CreatePost from "~/components/CreatePosts/CreatePost";
import './Styles.scss';
import Ngoc1 from "~/assets/1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

interface Media {
    source: string;
}

interface Post {
    _id: string;
    title: string;
    medias: Media[];
    likeNum: number;
    commentNum: number;
    author: string;
    createdAt: string;
}

interface User {
    _id: string;
    username: string;
    avatar: string;
}


const ItemArticle = () => {
    return (
        <div className="image-container group cursor-pointer">
            <img src={Ngoc1} className="w-full h-full object-cover" />
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

type ItemPostProps = {
    img: string
    className?: string;
}

const ItemPost: React.FC<ItemPostProps> = ({ img, className }) => {
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

const Article = () => {
    const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postResponse = await axios.get("https://dacnbe.onrender.com/post/getAllPosts");
                setPosts(postResponse.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const userResponse = await axios.get("https://dacnbe.onrender.com/user/getAllUsers");
                setUsers(userResponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchPosts();
        fetchUsers();
    }, []);

    const handleOpenCreatePost = () => {
        setIsOpenCreatePost(true);
    };

    const handleCloseCreatePost = () => {
        setIsOpenCreatePost(false);
    };
    const getUserAvatar = (authorId: string) => {
        const user = users.find((user) => user._id === authorId);
        return user ? user.avatar : ""; // Return the avatar if found
    };
    return (
        <div className="">
            {posts.length === 0 && (
                <div className="w-full flex justify-center">
                    <div className="w-[350px] flex flex-col items-center my-[60px] xl:mx-[44px] gap-4">
                        <CameraIcon />
                        <span className="text-[30px] font-bold">Chia sẻ ảnh</span>
                        <span className="text-center text-sm">Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.</span>
                        <div className="text-sm text-ig-primary-button cursor-pointer hover:text-white" onClick={handleOpenCreatePost}>
                            Chia sẻ ảnh đầu tiên của bạn
                        </div>
                    </div>
                </div>
            )}
            {/* Đóng CreatePost khi onClose được gọi */}
            <div className="w-full absolute top-0 left-0">
                {isOpenCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
            </div>
            <div className="w-full z-10">
                {posts.map((post) => (
                    <div className="grid grid-cols-3 gap-1" key={post._id}>
                        {post.medias.map((media, index) => (
                            <ItemPost
                                key={index}
                                img={media.source}
                                className="custom-class-for-post"
                            />
                        ))}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Article 