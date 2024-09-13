import React, { useState, useEffect } from "react";
import { VectorX } from "~/assets";
import './CreatePost.scss';
import ImageCropper from "./Component/ImageCropper";
import InputFilePost from "./Component/InputFilePost";
import NotificationPost from "./Component/NotificationPost";
import { SessionStorageProvider } from '~/ContextAPI/ContextProvider';


type CreatePostProps = {
    onClose: () => void
}


const CreatePost: React.FC<CreatePostProps> = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [showNotification, setShowNotification] = useState(false);


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
        setShowNotification(false)
        onClose();
    }

    const handleCloseNotification = () => {
        setShowNotification(false)
    }
    return (
        <div className="w-screen h-screen bg-black/50 absolute top-0">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="w-[34px] h-[34px] absolute top-6 right-2 cursor-pointer" onClick={handleClose}>
                    <VectorX className="w-[18px] h-[18px]" />
                </div>
                {showNotification && <NotificationPost cancel={handleCancelPost} close={handleCloseNotification} />}
                <div className="custom-create-post my-5">
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