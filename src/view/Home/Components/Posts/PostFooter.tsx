import React, { useRef, useState } from "react";
import { LoveIcon, FavouriteIcon, CommentIcon, ShareIcon, SavedIcon, EmojisIcon } from "~/assets";
import './Post.scss';
import Comment from "../../../../components/Comment/Comment";

interface PostFooterProps {
    username: string;
    title: string;
    textInput?: string;
    likeNum: number;
    commentNum: number;
    images: string[];
    avatar: string;
    postId: string; // add postId to make API call
    createdAt: string
}

const PostFooter: React.FC<PostFooterProps> = ({ username, title, likeNum, commentNum, images, avatar, postId, createdAt }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(likeNum);  // Initialize with the current number of likes
    const [saveds, setSaveds] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [comment, setComment] = useState("");

    const handleLike = async () => {
        const userId = localStorage.getItem('userID');
        const token = localStorage.getItem('authToken');
        if (!userId) {
            console.error('User is not logged in');
            window.location.href = "/login";
            return;
        }


        try {
            const response = await fetch(`https://dacnbe.onrender.com/post/likePost?postId=${postId}&userId=${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive",
                    "token": `Bearer ${token}`
                },
            });

            if (response.ok) {
                setLiked((prev) => !prev); // Toggle like state
                setLikes((prev) => (liked ? prev - 1 : prev + 1)); // Adjust likes count based on previous state
            } else {
                console.error('Failed to like the post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGetComment = async() => {
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
                console.error('Failed to comment the post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSaved = () => {
        setSaveds(prev => !prev);
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "18px";
            if (textarea.scrollHeight < 80) {
                textarea.style.height = `${textarea.scrollHeight}px`;
                textarea.style.overflowY = "hidden";
            } else {
                textarea.style.height = "80px";
                textarea.style.overflowY = "scroll";
            }
        }
    };

    const handleOpenComment = () => {
        setOpenComment(prev => !prev);
    };

    const handleCloseComment = () => {
        setOpenComment(prev => !prev);
    };

    return (
        <div className="flex flex-col gap-1 border-b border-white/20 pb-5 relative">
            <div className="flex items-center justify-between w-full mb-2 mt-4">
                <div className="flex items-center gap-4">
                    <div onClick={handleLike} className="cursor-pointer text-xl hover:text-white/60">
                        {!liked ? <LoveIcon /> : <FavouriteIcon className="fill-red-600" />}
                    </div>
                    <div className="cursor-pointer text-xl hover:text-white/60" onClick={handleGetComment}>
                        <CommentIcon className="" />
                    </div>
                    <div className="cursor-pointer text-xl hover:text-white/60">
                        <ShareIcon />
                    </div>
                </div>
                <div className="flex items-center cursor-pointer hover:text-white/60" onClick={handleSaved}>
                    {saveds ? (
                        <SavedIcon className="w-6 h-6 fill-white" />
                    ) : (
                        <SavedIcon className="w-6 h-6 fill-black" />
                    )}
                </div>
            </div>

            <p className="text-sm font-semibold">{likes} likes</p>
            <>
                <p className="text-sm font-bold">
                    {username}{" "}
                    <span className="font-normal">{title}</span>
                </p>

                <p className="text-sm text-gray-500 cursor-pointer" onClick={handleGetComment}>
                    {commentNum}
                </p>
            </>
            {openComment && (
                <Comment onClose={handleCloseComment} username={username} images={images} avatar={avatar} postId={postId} likeNum={likeNum} createdAt={createdAt}/>
            )}

            <div className="flex items-center gap-2 justify-between w-full">
                <div className="relative h-auto w-full flex items-center">
                    <textarea
                        ref={textareaRef}
                        className="w-full h-[20px] outline-none text-sm resize-none bg-transparent custom-scrollbar"
                        placeholder="Thêm bình luận..."
                        onInput={handleInput}
                        onChange={handleChangeInput}
                    />
                    {comment.trim() && (
                        <button className="text-blue-500 text-sm font-semibold hover:text-white transition-colors">
                            Đăng
                        </button>
                    )}
                </div>
                <div className="cursor-pointer">
                    <EmojisIcon className="w-[13px] h-[13px]" />
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
