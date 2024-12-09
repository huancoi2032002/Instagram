import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EmojisIcon, MapIcon, StaffIcon, DownArrowIcon } from "~/assets";
import AvatarImg from '~/assets/avatar.jpg'
import ImageCropper from "./ImageCropper";
import { LabelPost } from "./LabelPost";

interface Author {
    _id: string;
    fullname: string;
    username: string;
    password?: string; // Optional, if you don't need this, remove it
    email: string;
    isOnline: boolean;
    score: number;
    channels: string[]; // Assuming 'channels' is an array of strings
    createdAt: string; // Or use Date if it's a Date object
    updatedAt: string; // Or use Date if it's a Date object
}

type CreateNewPostProps = {
    step: number;
    setStep: (step: number) => void;
    onClose: () => void
}

const CreateNewPost: React.FC<CreateNewPostProps> = ({ step, setStep, onClose }) => {

    const [isOpenAccess, setIsOpenAccess] = useState(false);
    const [isOpenAdvancedSettings, setIsOpenAdvancedSettings] = useState(false);
    const [countText, setCountText] = useState("");

    // Function to retrieve images from sessionStorage
    const getImagesFromSession = (): string[] => {
        try {
            const images = sessionStorage.getItem("selectedFiles");
            console.log("Retrieved images:", images);
            return images ? JSON.parse(images) : [];
        } catch (error) {
            console.error("Failed to parse sessionStorage data:", error);
            return [];
        }
    };



    const createPost = async () => {
        // Step 1: Get userId and token from localStorage
        const userId = localStorage.getItem("userID");
        const token = localStorage.getItem("authToken");
        if (!userId || !token) {
            console.error("User ID or auth token not found in localStorage");
            return;
        }
    
        // Step 2: Fetch user data
        let authorData: Author | null = null;
        try {
            const response = await fetch(`https://dacnbe.onrender.com/user/getUserById?userId=${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "token": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                authorData = await response.json();
                alert("Đăng bài thành công")
            } else {
                console.error("Failed to fetch user data");
                return;
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            return;
        }
    
        if (!authorData) {
            console.error("No author data found");
            return;
        }
    
        // Step 3: Prepare FormData
        const formData = new FormData();
    
        // Append images
        const selectedFiles = getImagesFromSession(); // Your function to get image files (returns base64 or Blob URLs)
    
        selectedFiles.forEach((fileString: string, index: number) => {
            // If fileString starts with "data:", it's a base64 string; otherwise, it's a Blob URL
            if (fileString.startsWith("data:")) {
                // Convert base64 to Blob
                const base64Parts = fileString.split(",");
                const byteString = atob(base64Parts[1]);
                const mimeString = base64Parts[0].match(/:(.*?);/)?.[1] || "";
                const byteNumbers = new Uint8Array(byteString.length);
    
                for (let i = 0; i < byteString.length; i++) {
                    byteNumbers[i] = byteString.charCodeAt(i);
                }
    
                const blob = new Blob([byteNumbers], { type: mimeString });
                formData.append("image", blob, `image_${index}.png`); // Append with a unique filename
            } else {
                // Handle Blob URL
                fetch(fileString)
                    .then(res => res.blob())
                    .then(blob => formData.append("image", blob, `image_${index}.png`))
                    .catch(err => console.error("Error appending Blob URL:", err));
            }
        });
    
        // Prepare title and hashtags
        const title = countText || "Ngoc diep xinh xan";
        const hashtagsArray = countText
            .trim()
            .split(/\s+/)
            .filter(word => word.startsWith("#")); // Create an array of hashtags
    
        // Append title
        formData.append("title", title);
    
        // Append hashtags as individual values
        hashtagsArray.forEach((hashtag: string) => {
            formData.append("hashtags[]", hashtag); // Send each hashtag individually
        });
    
        // Append author ID
        formData.append("author", authorData._id); // Only send author ID
    
        // Step 4: Create the post
        try {
            const response = await fetch("https://dacnbe.onrender.com/post/create", {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "token": `Bearer ${token}`, // Include token
                },
                body: formData, // Attach FormData
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("Post created successfully:", data);
            } else {
                const errorText = await response.text();
                console.error("Failed to create post:", errorText);
            }
        } catch (error) {
            console.error("Error creating post:", error);
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

    const handlePrevStep = () => {
        if (step === 3) {
            setStep(step - 1);
        }
    };

    return (
        <div className="bg-ig-elevated-background rounded-xl overflow-hidden">

            <LabelPost
                title={"Đăng bài mới"}
                showBackNext={true}
                onPrev={handlePrevStep}
                onNext={createPost}
                step={step}
            />

            <div className="w-full flex">
                <ImageCropper step={3} setStep={setStep} />
                <div className="w-[340px] xl:h-[711px] md:h-[487px] overflow-y-auto">
                    <div className="px-4">
                        <div className="flex gap-3 py-5 items-center">
                            <div className="w-7 h-7 ">
                                <img src={AvatarImg} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-sm text-ig-primary-text">nauh_nguyen</span>
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
                        <div className="py-3 flex justify-between items-center">
                            <div className="text-ig-tertiary-text">
                                Thêm vị trí
                            </div>
                            <div className="">
                                <MapIcon className="" />
                            </div>
                        </div>
                        <div className="py-3 flex justify-between items-center">
                            <div className="text-ig-primary-text">
                                Thêm cộng tác viên
                            </div>
                            <div className="">
                                <StaffIcon className="" />
                            </div>
                        </div>
                        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAccess}>
                            <div className="text-ig-primary-text">
                                Trợ năng
                            </div>
                            <div className="">
                                <DownArrowIcon className="" />
                            </div>
                        </div>
                        {isOpenAccess && (
                            <div className="dropdown">
                                <span className="text-ig-secondary-text text-xs">Văn bản thay thế mô tả ảnh cho những người suy giảm thị lực. Văn bản thay thế sẽ được tạo tự động cho ảnh của bạn hoặc bạn có thể tự viết.</span>
                                <div className="flex flex-col gap-3 mt-2">
                                    <div className="flex gap-2">
                                        <div className="w-11 h-11">
                                            <img src={AvatarImg} className="w-full h-full object-cover" />
                                        </div>
                                        <input type="text" className="w-full px-3 py-1 text-sm text-ig-secondary-text rounded-md bg-transparent outline-none focus:border focus:border-white/10" placeholder="Viết văn bản thay thế..." />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-11 h-11">
                                            <img src={AvatarImg} className="w-full h-full object-cover" />
                                        </div>
                                        <input type="text" className="w-full px-3 py-1 text-sm text-ig-secondary-text rounded-md bg-transparent outline-none focus:border focus:border-white/10" placeholder="Viết văn bản thay thế..." />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="py-3 flex justify-between items-center cursor-pointer" onClick={handleOpenAdvancedSettings}>
                            <div className="text-ig-primary-text">
                                Cài đặt nâng cao
                            </div>
                            <div className="">
                                <DownArrowIcon className="" />
                            </div>
                        </div>
                        {isOpenAdvancedSettings && (
                            <div className="dropdown flex flex-col gap-2">
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <span className="max-w-[252px] text-ig-primary-text text-base">Ẩn lượt thích và lượt xem trên bài viết này</span>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <p className="text-ig-tertiary-text text-xs">Chỉ bạn mới nhìn thấy tổng số lượt thích và lượt xem bài viết này. Về sau, bạn có thể thay đổi tùy chọn này bằng cách mở menu ··· ở đầu bài viết. Để ẩn số lượt thích trên bài viết của người khác, hãy đi đến phần cài đặt tài khoản. <Link to="" className="text-xs text-ig-link">Tìm hiểu thêm</Link></p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <span className="max-w-[252px] text-ig-primary-text text-base">Tắt tính năng bình luận</span>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <p className="text-ig-tertiary-text text-xs">Về sau, bạn có thể thay đổi tùy chọn này bằng cách mở menu ··· ở đầu bài viết.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewPost;
