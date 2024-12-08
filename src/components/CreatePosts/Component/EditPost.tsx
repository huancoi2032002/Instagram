import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmojisIcon, MapIcon, StaffIcon, DownArrowIcon, ZoomIcon, CutIcon, PrevIcon, NextIcon } from "~/assets";
import AvatarImg from "~/assets/avatar.jpg";
import ImageCropper from "./ImageCropper";
import { LabelPost } from "./LabelPost";
import axios from "axios";
import { useRef } from "react";

interface Author {
    _id: string;
    fullname: string;
    username: string;
    email: string;
    isOnline: boolean;
    score: number;
    channels: string[];
    createdAt: string;
    updatedAt: string;
}

type EditPostProps = {
    postId: string;
    onClose: () => void;
};

const EditPost: React.FC<EditPostProps> = ({ postId, onClose }) => {
    const [isOpenAccess, setIsOpenAccess] = useState(false);
    const [isOpenAdvancedSettings, setIsOpenAdvancedSettings] = useState(false);
    const [countText, setCountText] = useState("");
    const [images, setImages] = useState<string[]>([]);  // Holds the image URLs
    const [authorData, setAuthorData] = useState<Author | null>(null);
    const createPostRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch post data by postId
    const token = localStorage.getItem("authToken")
    // useEffect để lấy dữ liệu bài viết từ server
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = await axios.get(
                    `https://dacnbe.onrender.com/post/getOnePost`, {
                    params: {
                        postId: postId,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Connection": "keep-alive",
                        "token": `Bearer ${token}`,
                    },
                });

                if (postResponse && postResponse.data) {
                    const data = postResponse.data;
                    setCountText(data.title);
                    // Lưu URL của hình ảnh vào state images
                    setImages(data.medias.map((media) => media.source)); // Lưu URL hình ảnh
                    setAuthorData(data.author);
                    console.log("Fetched images:", data.medias); // Log images to debug
                } else {
                    console.error("Failed to fetch post data");
                }
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        if (postId) {
            fetchPost();
        }
    }, [postId]);

    // Cập nhật bài viết
    const updatePost = async () => {
    try {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("Auth token not found");
            return;
        }

        // Define formData
        const formData = new FormData();
        formData.append("title", countText);

        // Type for images: assuming it can be either a URL (string) or a File (File object)
        const imageUrls: string[] = [];  // Array to store image URLs
        const files: File[] = [];         // Array to store image files

        // Kiểm tra và xử lý hình ảnh đã có
        if (images.length > 0) {
            images.forEach((image) => {
                // If image is a URL, store in imageUrls array
                if (typeof image === 'string' && image.startsWith('http')) {
                    imageUrls.push(image);
                } else if (image instanceof File) {
                    // If image is a File, push to files array
                    files.push(image);
                } else {
                    console.error('Unexpected image type:', image);
                }
            });
        } else {
            // Nếu không có hình ảnh mới, gửi lại các URL hình ảnh cũ nếu có
            if (existingImageUrls && existingImageUrls.length > 0) {
                imageUrls.push(...existingImageUrls);
            }
        }

        // If there are image URLs, send them as JSON instead of FormData
        if (imageUrls.length > 0) {
            formData.append("imageUrls", JSON.stringify(imageUrls)); // Send URLs as JSON
        }

        // If there are files, append them to FormData
        files.forEach((file, index) => {
            formData.append(`images[${index}]`, file); // Append file
        });

        // Add author if available
        if (authorData) {
            formData.append("author", authorData._id);
        }

        // Make the request to update the post
        const response = await fetch(`https://dacnbe.onrender.com/post/update?postId=${postId}`, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive",
                "token": `Bearer ${token}`,
            },
            body: formData,
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            console.log("Post updated successfully:", data);
            onClose();  // Close the form after successful update
        } else {
            console.error("Failed to update post:", await response.text());
        }
    } catch (error) {
        console.error("Error updating post:", error);
    }
};








    const onChangeCountText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length <= 2200) {
            setCountText(text);
        }
    };

    const handleOpenAccess = () => {
        setIsOpenAccess(!isOpenAccess);
    };

    const handleOpenAdvancedSettings = () => {
        setIsOpenAdvancedSettings(!isOpenAdvancedSettings);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (createPostRef.current && !createPostRef.current.contains(event.target as Node)) {
                if (step === 1) {
                    onClose();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [step, onClose]);

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

    return (
        <div className="w-screen h-screen bg-black/50 absolute top-0">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="custom-create-post my-5" ref={createPostRef}>
                    <div className="custom-create-post-primary">
                        <div className="bg-ig-elevated-background rounded-xl overflow-hidden">
                            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                                <div className="w-full text-sm font-semibold text-center">Chỉnh sửa bài viết</div>
                                <button

                                    className="text-ig-primary-button text-sm cursor-pointer text-nowrap hover:text-white"
                                    onClick={updatePost}
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                            <div className="w-full flex">
                                <div className="w-full flex">
                                    <div className="relative custom-create-post-second xl:w-[711px] xl:h-[711px] md:w-[487px] md:h-[487px]">
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

                                        {/* Display the current image */}
                                        {images.length > 0 && (
                                            <div className="w-full h-full overflow-hidden">
                                                <img
                                                    src={images[currentIndex]}
                                                    alt="Post media"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}


                                        <div className="absolute w-full bottom-1 px-4 py-2">
                                            <div className="w-full flex justify-between">
                                                <div className="flex gap-3">
                                                    <div className="w-8 h-8 p-2 bg-ig-second-button/80 rounded-full cursor-pointer hover:bg-ig-second-button/60">
                                                        <CutIcon />
                                                    </div>
                                                    <div className="w-8 h-8 p-2 bg-ig-second-button/80 rounded-full cursor-pointer hover:bg-ig-second-button/60">
                                                        <ZoomIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="w-[340px] xl:h-[711px] md:h-[487px] overflow-y-auto">
                                    <div className="px-4">
                                        <div className="flex gap-3 py-5 items-center">
                                            <div className="w-7 h-7">
                                                <img src={AvatarImg} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <span className="text-sm text-ig-primary-text">{authorData?.username || "Người dùng"}</span>
                                        </div>
                                        <textarea
                                            className="w-full max-h-[168px] h-[168px] bg-transparent outline-none text-sm resize-none"
                                            value={countText}
                                            onChange={onChangeCountText}
                                        />
                                        <div className="py-3 flex justify-between items-center">
                                            <div>
                                                <EmojisIcon className="fill-[#737373]" />
                                            </div>
                                            <div className="text-ig-tertiary-text text-xs">
                                                {countText.length}/2200
                                            </div>
                                        </div>


                                        {/* Access and Advanced Settings */}
                                        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAccess}>
                                            <div className="text-ig-primary-text">Trợ năng</div>
                                            <DownArrowIcon />
                                        </div>
                                        {isOpenAccess && (
                                            <div className="dropdown">
                                                <span className="text-ig-secondary-text text-xs">Mô tả cho ảnh.</span>
                                                <div className="flex flex-col gap-3 mt-2"></div>
                                            </div>
                                        )}
                                        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAdvancedSettings}>
                                            <div className="text-ig-primary-text">Cài đặt nâng cao</div>
                                            <DownArrowIcon />
                                        </div>
                                        {isOpenAdvancedSettings && (
                                            <div className="dropdown flex flex-col gap-2"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EditPost;
