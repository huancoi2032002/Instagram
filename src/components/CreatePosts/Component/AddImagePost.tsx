import React, { useRef, useEffect, useState } from "react";
import { NextIcon, PlusIcon, PrevIcon, VectorX } from "~/assets";
import useSessionStorage from "~/Hook/useSessionStorage";

type AddImagePostProps = {
    onOpenAddImage: () => void
    onImageAdd: (newImages: string[]) => void
    onImageSelect: (index: number) => void;
    onImageDelete: (index: number) => void;
    currentImageIndex: number
}

const AddImagePost: React.FC<AddImagePostProps> = ({ onOpenAddImage, onImageAdd, currentImageIndex, onImageSelect, onImageDelete }) => {
    const [selectedFiles, setSelectedFiles] = useSessionStorage<string[]>("selectedFiles", []);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const base64Files = await Promise.all(
                Array.from(files).map((file) => fileToBase64(file))
            );
            const updatedFiles = [...selectedFiles, ...base64Files];
            setSelectedFiles(updatedFiles);
            onImageAdd(base64Files);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowPrev(scrollLeft > 0);
            setShowNext(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const handlePrevSlider = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const handleNextSlider = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };
    const handleImageClick = (index: number) => {
        onImageSelect(index)
    }

    const handleDeleteImage = (index: number) => {
        console.log("Deleting image at index:", index);
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
        console.log("Updated files:", updatedFiles);
        onImageDelete(index)
    };

    useEffect(() => {
        if (scrollRef.current) {
            handleScroll();
        }
    }, [selectedFiles]);

    useEffect(() => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            setShowNext(scrollWidth > clientWidth);
        }
        console.log("Số lượng file AddImagePost:", selectedFiles);
    }, [selectedFiles]);


    return (
        <div className="h-[118px] rounded-lg bg-[#1A1A1A]/80 p-2">
            <div className="flex h-full items-center">
                <div className="relative max-w-[603px]">
                    {showPrev && (
                        <div
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full cursor-pointer z-50"
                            onClick={handlePrevSlider}
                        >
                            <PrevIcon className="text-black" />
                        </div>
                    )}
                    <div
                        className="relative max-w-[603px] overflow-hidden"
                        ref={scrollRef}
                        onScroll={handleScroll}
                    >
                        <div className="flex gap-2">
                            {selectedFiles.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-[96px] h-[96px] flex items-center justify-center relative flex-shrink-0 ${index === currentImageIndex ? 'opacity-100' : 'opacity-50'}`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                    {index === currentImageIndex && (
                                        <div
                                            className="absolute top-0 right-3 cursor-pointer"
                                            onClick={(e) => { e.stopPropagation(); handleDeleteImage(index); }}
                                        >
                                            <VectorX />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {showNext && (
                        <div
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full cursor-pointer"
                            onClick={handleNextSlider}
                        >
                            <NextIcon className="text-black" />
                        </div>
                    )}
                </div>
                <div className="h-full">
                    <input type="file" multiple id="image-upload" className="hidden" onChange={handleFileChange} />
                    <label
                        className="h-[50px] w-[50px] flex items-center justify-center border-y border-y-ig-separator rounded-full cursor-pointer"
                        htmlFor="image-upload"
                    >
                        <PlusIcon className="text-ig-secondary-text" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AddImagePost;
