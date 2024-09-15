import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { PrevIcon, NextIcon } from "~/assets";


interface FeedPostProps {
    images: string[];
    username: string;
    avatar: string;
    titlePost: string
}


const FeedPost: React.FC<FeedPostProps> = ({ images, username, avatar, titlePost }) => {
    const [currentIndex, setCurrentIndex] = useState(0);



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



    return (
        <div className="relative">
            <div className="max-w-[468px]">
                <PostHeader username={username} avatar={avatar} />
                <div className="w-[468px] h-auto my-2 rounded-lg overflow-hidden relative">
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
                <PostFooter titlePost={titlePost} username="Huan" />
            </div>
        </div>
    );
};

export default FeedPost;
