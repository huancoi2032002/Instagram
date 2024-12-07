import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedPost from "./FeedPost";
import defaultAvatar from "~/assets/default-avatar.jpg";

interface Media {
    source: string;
}

interface Post {
    _id: string;
    title: string;
    medias: Media[];
    likeNum: number;
    commentNum: number;
    author: {
        _id: string;
        username: string;
        avatar: string;
    };
    createdAt: string;
}

const FeedPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const userId = localStorage.getItem('userID');
        const token = localStorage.getItem('authToken');

        // Fetch posts based on the userId
        const fetchPosts = async () => {
            try {
                const postResponse = await axios.post(
                    `https://dacnbe.onrender.com/post/getPosts?userId=${userId}`,
                    { "viewedPosts": [] },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "*/*",
                            "token": `Bearer ${token}`,
                        },
                    }
                );
                setPosts(postResponse.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();

        // Set interval to refresh data
        const intervalId = setInterval(fetchPosts, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="max-w-[702px] flex flex-col items-center justify-center gap-6">
            {posts.map(post => {
                const author = post.author; // Directly access the author data
                return (
                    <FeedPost
                        key={post._id}
                        username={author?.username || "Unknown"} // Use username directly
                        avatar={author?.avatar || defaultAvatar} // Use avatar directly
                        title={post.title}
                        images={post.medias.map((media) => media.source)} // Lấy nguồn ảnh/video từ medias
                        likeNum={post.likeNum}
                        commentNum={post.commentNum}
                        createdAt={post.createdAt}
                        postId={post._id}
                        _id={author?._id ?? ""} // Use _id from author if available
                    />
                );
            })}
        </div>
    );
};

export default FeedPosts;
