import React, { useState, useRef, useEffect } from "react";
import NotificationPost from "../../view/Home/Components/NotificationPost/NotificationPost";
import { EmojisIcon, OtherOptionsIcon, VectorX } from "~/assets";
import { PrevIcon, NextIcon, LoveIcon, FavouriteIcon, ShareIcon, SavedIcon, CommentIcon } from "~/assets";
import { formatDateDifference } from "~/store/format/formatDateDifference";
import axios from "axios";


type CommentProps = {
    onClose: () => void
    images: string[]
    username: string
    avatar: string;
    likeNum: number
    postId: string
    createdAt: string;
}
interface Comment {
    _id: string;
    post: string;
    user: string;
    parent: string | null;
    content: string;
    childrenNum: number;
    replyTo: string | null;
    createdAt: string;
    updatedAt: string;

}

interface User {
    _id: string;
    username: string;
    avatar: string;
}


const Comment: React.FC<CommentProps> = ({ onClose, images, username, avatar, likeNum, postId, createdAt }) => {

    const [isShowNotificationPost, setIsShowNotificationPost] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [saveds, setSaveds] = useState(false);
    const [formattedDate, setFormattedDate] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);


    const handleShowNotificationPost = () => {
        setIsShowNotificationPost(prev => !prev)
    }

    useEffect(() => {
        const formattedDate = formatDateDifference(createdAt);
        setFormattedDate(formattedDate);
    }, [createdAt]);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const fetchComments = async () => {
            try {
                const postResponse = await axios.get(`https://dacnbe.onrender.com/postComment/getComment?postId=${postId}&skip=0`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "token": `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                    }
                });
                setComments(postResponse.data);
            } catch (error) {
                console.error("Error fetching comments:", error);
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

        fetchComments();
        fetchUsers();

    }, [postId]);  // Add postId as dependency




    const handleCreateComment = async () => {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('userID');
        const post = postId

        if (!postId) {
            console.error("Post ID is missing");
            return;
        }

        if (!user) {
            console.error("User ID is missing");
            return;
        }

        if (!comment.trim()) {
            console.warn("Comment is empty");
            return;
        }

        try {
            const response = await fetch(`https://dacnbe.onrender.com/postComment/createComment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "token": `Bearer ${token}`, // Đảm bảo sử dụng "Authorization"
                },
                body: JSON.stringify({
                    post,      // ID của bài viết
                    user,      // ID của người dùng
                    content: comment,  // Nội dung bình luận
                    parent: "",      // ID của bình luận gốc nếu có (nếu có chế độ trả lời)
                    replyTo: "", // Nếu có trả lời một bình luận, điền ID của bình luận đó
                }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setComments((prevComments) => [...prevComments, newComment]);
                setComment("");
            } else {
                const errorDetails = await response.json();
                console.error("Error Details:", errorDetails); // Log chi tiết lỗi
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleImageSelect = (index: number) => {
        setCurrentIndex(index);
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

    const getUserById = (userId: string) => {
        return users.find(user => user._id === userId);
    };



    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-black/50 z-[9999]">
            <div className="w-full h-full flex lg:py-20 2xl:py-10 px-4 sm:px-10 md:px-20 lg:px-40 2xl:px-72">
                <div className="w-[60%] h-full relative">
                    {images.length > 0 && (
                        <img
                            src={images[currentIndex]}
                            alt={username}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-y-0 left-2 flex items-center">
                        <button
                            onClick={handlePrev}
                            className={`p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/60  ${currentIndex === 0 ? 'hidden' : ''}`}
                        >
                            <PrevIcon />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === images.length - 1}
                            className={`p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/60  ${currentIndex === images.length - 1 ? 'hidden' : ''}`}
                        >
                            <NextIcon />
                        </button>
                    </div>
                    <div className="w-full absolute flex items-center gap-1 bottom-1 justify-center">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-[6px] h-[6px] cursor-pointer rounded-full ${index === currentIndex ? 'bg-ig-primary-button' : 'bg-[#A8A8A8]'}`}
                                onClick={() => handleImageSelect(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="w-[40%] h-full bg-black flex flex-col">
                    <div className="w-full h-[60px] border-b border-white/20">
                        <div className="h-full w-full flex items-center justify-between">
                            <div className="flex items-center gap-4 pl-4 pr-1 py-[14px]">
                                <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                                    <img src={avatar} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm text-[#F5F5F5]">{username}</span>
                                </div>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center">
                                <OtherOptionsIcon />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[700px]">

                        {comments.map(comment => {

                            const author = getUserById(comment.user);  
                            console.log("Author:", author); 



                            return (
                                <div className="h-auto w-full flex pl-4 pr-4 py-[14px] gap-2" key={comment._id}>
                                    <div className="w-full flex gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[32px] h-[32px] rounded-full overflow-hidden flex-shrink-0">
                                                <img
                                                    src={author?.avatar || 'default-avatar-url'} // use a default avatar if none exists
                                                    className="w-full h-full object-cover"
                                                    alt={author?.username}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center h-auto w-full">
                                                {/* Display user's username */}
                                                <span className="text-sm text-[#F5F5F5] break-words">{author?.username || 'Unknown User'} {comment.content}</span>
                                            </div>
                                            <div className="w-full h-auto text-[#A8A8A8] text-xs flex items-center gap-4">
                                                {/* Show comment timestamp */}
                                                <span>{new Date(comment.createdAt).toLocaleString()}</span>
                                                <span>300 lượt thích</span>
                                                <span>Trả lời</span>
                                                <span><OtherOptionsIcon /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer text-xl hover:text-white/60 flex items-center">

                                        <LoveIcon className="w-3 h-3" />

                                    </div>
                                </div>
                            );
                        })}




                    </div>
                    <div className="w-full h-auto">
                        <div className="w-full py-[6px] px-4 border-b border-white/20">
                            <span className="text-gray-600 font-medium text-xs">{formattedDate}</span>
                        </div>
                        <div className="w-full py-[6px] pr-4 ">
                            <div className="h-auto w-full flex">
                                <div className="py-2 px-4">
                                    <EmojisIcon className="w-6 h-6" />
                                </div>
                                <div className="relative h-auto w-full flex items-center">
                                    <textarea
                                        ref={textareaRef}
                                        className="w-full h-[20px] outline-none text-sm resize-none bg-transparent custom-scrollbar"
                                        placeholder="Thêm bình luận..."
                                        onInput={handleInput}
                                        onChange={handleChangeInput}
                                    />

                                    <button
                                        onClick={handleCreateComment}
                                        className="text-blue-500 text-sm font-semibold hover:text-white transition-colors"
                                    >
                                        Đăng
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowNotificationPost && (
                <NotificationPost onClose={() => setIsShowNotificationPost(false)} />
            )}
            <div className="absolute top-6 right-4 cursor-pointer" onClick={onClose}>
                <VectorX />
            </div>
        </div>
    );
};

export default Comment;