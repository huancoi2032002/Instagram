import React, { useState, useEffect } from "react";
import useSessionStorage from '~/Hook/useSessionStorage';
import { PrevIcon, NextIcon, CutIcon, MediaFileIcon, ZoomIcon } from "~/assets";
import { LabelPost } from "./LabelPost";
import CreateNewPost from "./CreateNewPost";
import NotificationPost from "./NotificationPost";
import AddImagePost from "./AddImagePost";

type ImageCropperProps = {
    step: number;
    setStep: (step: number) => void;
};

const ImageCropper: React.FC<ImageCropperProps> = ({ step, setStep }) => {
    const [selectedFiles, setSelectedFiles] = useSessionStorage<string[]>("selectedFiles", []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [isAddImagePostVisible, setIsAddImagePostVisible] = useState(false);

    const updateSessionStorage = (files: string[]) => {
        setSelectedFiles(files);
        window.sessionStorage.setItem("selectedFiles", JSON.stringify(files));
    };

    useEffect(() => {
        const syncSessionStorage = (event: StorageEvent) => {
            if (event.key === "selectedFiles") {
                const updatedFiles = event.newValue ? JSON.parse(event.newValue) : [];
                setSelectedFiles(updatedFiles);
            }
        };

        window.addEventListener('storage', syncSessionStorage);

        return () => {
            window.removeEventListener('storage', syncSessionStorage);
        };
    }, [setSelectedFiles]);

    useEffect(() => {
        if (currentIndex >= selectedFiles.length) {
            setCurrentIndex(selectedFiles.length - 1);
        }
    }, [selectedFiles]);

    const handleNext = () => {
        if (currentIndex < selectedFiles.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handlePrevStep = () => {
        if (step === 3) {
            setStep(step - 1);
        } else if (step === 2) {
            setShowNotification(true);
        }
    };

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleCancelPost = () => {
        sessionStorage.clear()
        setShowNotification(false);
        setStep(1);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    const handleOpenAddImage = () => {
        setIsAddImagePostVisible(prev => !prev);
        console.log("bật: ");
        
    };

    const handleImageAdd = (newImages: string[]) => {
        const updatedFiles = [...selectedFiles, ...newImages];
        setSelectedFiles(updatedFiles);
        updateSessionStorage(updatedFiles);
    };

    const handleImageSelect = (index: number) => {
        setCurrentIndex(index);
    };

    const handleImageDelete = (index: number) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
        updateSessionStorage(updatedFiles);

        // Adjust the currentIndex if necessary
        if (currentIndex >= updatedFiles.length) {
            setCurrentIndex(updatedFiles.length - 1);
        }
    };

    return (
        <div className="bg-ig-elevated-background rounded-xl overflow-hidden">
            <LabelPost
                title={step === 3 ? "Tạo bài viết mới" : "Chỉnh sửa"}
                showBackNext={true}
                onPrev={handlePrevStep}
                onNext={handleNextStep}
                step={step}
            />
            <div className="w-full flex">
                <div className="relative custom-create-post-second xl:w-[711px] xl:h-[711px] md:w-[487px] md:h-[487px]">
                    <div className="w-full h-full">
                        {selectedFiles.length > 0 && (
                            <img
                                src={selectedFiles[currentIndex]}
                                className="w-full h-full object-cover"
                                alt="Selected"
                            />
                        )}
                    </div>
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
                            disabled={currentIndex === selectedFiles.length - 1}
                            className={`p-2 bg-black/50 rounded-full cursor-pointer hover:bg-black/60  ${currentIndex === selectedFiles.length - 1 ? 'hidden' : ''}`}
                        >
                            <NextIcon />
                        </button>
                    </div>

                    {isAddImagePostVisible && (
                        <div className="absolute bottom-14 right-4">
                            <AddImagePost
                                onImageSelect={handleImageSelect}
                                currentImageIndex={currentIndex}
                                onImageAdd={handleImageAdd}
                                onOpenAddImage={handleOpenAddImage}
                                onImageDelete={handleImageDelete}
                            />
                        </div>
                    )}

                    {step === 2 && (
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
                                <div className="flex items-center gap-1">
                                    {selectedFiles.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-[6px] h-[6px] rounded-full ${index === currentIndex ? 'bg-ig-primary-button' : 'bg-[#A8A8A8]'}`}
                                            onClick={() => handleImageSelect(index)}
                                        ></div>
                                    ))}
                                </div>
                                <div className="w-8 h-8 p-2 bg-ig-second-button/80 rounded-full cursor-pointer hover:bg-ig-second-button/60" onClick={handleOpenAddImage}>
                                    <MediaFileIcon />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {step === 3 && (
                    <div className="flex-grow ml-4">
                        <CreateNewPost />
                    </div>
                )}
            </div>
            {showNotification && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <NotificationPost cancel={handleCancelPost} close={handleCloseNotification} />
                </div>
            )}
        </div>
    );
};

export default ImageCropper;
