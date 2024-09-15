import React, { useState, useEffect, useRef } from "react";
import { VectorX } from "~/assets";
import './CreatePost.scss';
import ImageCropper from "./Component/ImageCropper";
import InputFilePost from "./Component/InputFilePost";
import NotificationPost from "./Component/NotificationPost";


type CreatePostProps = {
    onClose: () => void
}


const CreatePost: React.FC<CreatePostProps> = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const createPostRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        console.log("Current step:", step);
    }, [step]);


    const handleFilesSelected = () => {
        setStep(2);
    };
    const handleClose = () => {
        setShowNotification(true)
    }
    const handleCancelPost = () => {
        sessionStorage.clear();
        setShowNotification(false);
        onClose();
    }

    const handleCloseNotification = () => {
        setShowNotification(false)
    }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (createPostRef.current && !createPostRef.current.contains(event.target as Node)) {
                if(step === 1){
                    onClose();
                }else if(step === 2 || step === 3){
                    setShowNotification(true)
                }
            }
        };

        // Thêm sự kiện 'mousedown' vào document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function khi component bị unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [step, onClose]);
    return (
        <div className="w-screen h-screen bg-black/50 absolute top-0">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="w-[34px] h-[34px] absolute top-6 right-2 cursor-pointer" onClick={handleClose}>
                    <VectorX className="w-[18px] h-[18px]" />
                </div>
                {showNotification && <NotificationPost cancel={handleCancelPost} close={handleCloseNotification} />}
                <div className="custom-create-post my-5" ref={createPostRef}>
                    <div className="custom-create-post-primary">
                        {step === 1 && <InputFilePost onFilesSelected={handleFilesSelected} />}
                        {step >= 2 && (
                            <>
                                <ImageCropper step={step} setStep={setStep} />
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost