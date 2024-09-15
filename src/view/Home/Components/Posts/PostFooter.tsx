import React, { useRef, useState } from "react";
import { LoveIcon, CommentIcon, FavouriteIcon, ShareIcon, SavedIcon, EmojisIcon } from "~/assets";
import './Post.scss'

interface PostFooterProps {
    username: string
    titlePost: string
    textInput?: string
}

const PostFooter: React.FC<PostFooterProps> = ({ username, titlePost }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    const [saveds, setSaveds] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [comment, setComment] = useState("")

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };

    const handleSaved = () => {
        setSaveds(prev => !prev)
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value)
    }

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
    }

    return (
        <div className="flex flex-col gap-1 border-b border-white/20 pb-5">
            <div className="flex items-center justify-between w-full mb-2 mt-4">
                <div className="flex items-center gap-4">
                    <div onClick={handleLike} className="cursor-pointer text-xl hover:text-white/60">
                        {!liked ? <LoveIcon /> : <FavouriteIcon className="fill-red-600" />}
                    </div>
                    <div className="cursor-pointer text-xl hover:text-white/60">
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
                    <span className="font-normal">{titlePost}</span>
                </p>

                <p className="text-sm text-gray-500 cursor-pointer">
                    Xem tất cả 3.213 bình luận
                </p>
            </>


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
                        <button className=" text-blue-500 text-sm font-semibold hover:text-white transition-colors">
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
