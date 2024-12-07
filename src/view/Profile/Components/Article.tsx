import { CameraIcon, CommentIcon, FavouriteIcon } from "~/assets";
import CreatePost from "~/components/CreatePosts/CreatePost";
import './Styles.scss';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "~/store/User/User";
import Comment from "~/components/Comment/Comment";

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

type ItemPostProps = {
    img: string;
    className?: string;
    likeNum: number;
    commentNum: number;
    postId: string;
}

const ItemPost: React.FC<ItemPostProps> = ({ img, className, likeNum, commentNum, postId }) => {
    const [isOpenComment, setOpenComment] = useState(false);

    const handleGetComment = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await fetch(`https://dacnbe.onrender.com/postComment/getComment?postId=${postId}&skip=0`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive",
                    "token": `Bearer ${token}`
                },
            });

            if (response.ok) {
                setOpenComment(prev => !prev);
                console.log(postId);
            } else {
                console.error('Failed to comment on the post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={`image-container group cursor-pointer ${className}`} onClick={handleGetComment}>
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute w-full h-full left-0 top-0 z-20 flex justify-center items-center lg:gap-8 md:gap-4 bg-black/40 hidden group-hover:flex">
                <div className="flex items-center gap-1">
                    <FavouriteIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">{likeNum}</span>
                </div>
                <div className="flex items-center gap-1">
                    <CommentIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">{commentNum}</span>
                </div>
            </div>
        </div>
    );
};
interface ArticleProps {
    userId: string | undefined;
}

const Article:React.FC<ArticleProps> = ({ userId }) => {
    const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        const fetchPosts = async () => {
            try {
                const postResponse = await axios.get(`https://dacnbe.onrender.com/post/getPostsOfOneUser?userId=${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "token": `Bearer ${token}`,
                    }
                });

                setPosts(postResponse.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const userResponse = await fetch("https://dacnbe.onrender.com/user/getAllUsers");
                const userData = await userResponse.json();
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchPosts();
        fetchUsers();
    }, [userId]);

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
            <div className="w-full absolute top-0 left-0">
                {isOpenCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
            </div>
            <div className="w-full z-10">
                <div className="grid grid-cols-3 gap-1">
                    {posts.map((post) => (
                        <ItemPost
                            key={post._id}
                            img={post.medias[0].source}
                            className="custom-class-for-post"
                            likeNum={post.likeNum}
                            commentNum={post.commentNum}
                            postId={post._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Article;
