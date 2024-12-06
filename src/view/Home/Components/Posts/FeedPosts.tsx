import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedPost from "./FeedPost";
import defaultAvatar from "~/assets/default-avatar.jpg"

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

const FeedPosts = () => {
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
        const intervalId = setInterval(() => {
            fetchPosts();
            fetchUsers();
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);

    const getUserById = (userId: string) => {
        return users.find(user => user._id === userId);
    };


    return (
        <div className="max-w-[702px] flex flex-col items-center justify-center gap-6">
            {posts.map(post => {
                const author = getUserById(post.author); // Tìm người dùng theo id tác giả
                return (
                    <FeedPost
                        key={post._id}
                        username={author?.username || "Unknown"} // Sử dụng username từ người dùng
                        avatar={author?.avatar || defaultAvatar} // Avatar mặc định nếu không có avatar
                        title={post.title}
                        images={post.medias.map((media) => media.source)} // Lấy nguồn ảnh/video từ medias
                        likeNum={post.likeNum}
                        commentNum={post.commentNum}
                        createdAt={post.createdAt}
                        postId={post._id}
                    />
                );
            })}
        </div>
    )
}

export default FeedPosts