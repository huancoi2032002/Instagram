import React from "react";
import useSessionStorage from '~/Hook/useSessionStorage';
import { MediaIcon } from "~/assets";
import { LabelPost } from "./LabelPost";

type InputFilePostProps = {
    onFilesSelected: () => void; // Callback when files are selected
};

const InputFilePost: React.FC<InputFilePostProps> = ({ onFilesSelected }) => {
    const [selectedFiles, setSelectedFiles] = useSessionStorage<string[]>("selectedFiles", []);

    // Convert file to base64 (for images) or Blob URL (for videos)
    const fileToBase64OrBlob = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            if (file.type.startsWith("image/")) {
                reader.readAsDataURL(file); // Convert image to base64
            } else {
                resolve(URL.createObjectURL(file)); // Convert video to Blob URL
            }
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const base64OrBlobFiles = await Promise.all(
                Array.from(files).map((file) => fileToBase64OrBlob(file))
            );

            // Merge the new files with the existing ones
            const updatedFiles = [...selectedFiles, ...base64OrBlobFiles];

            // Update session storage
            setSelectedFiles(updatedFiles);

            // Wait for session storage update to complete before calling onFilesSelected
            setTimeout(() => {
                if (updatedFiles.length > 0) {
                    console.log('Updated session storage:', updatedFiles);
                    onFilesSelected();  // Proceed to step 2 after storage update
                }
            }, 0); // Ensure it's executed after the state update
        }
    };

    return (
        <div className=" bg-ig-elevated-background rounded-xl overflow-hidden">
            <LabelPost
                title="Tạo bài viết"
                showBackNext={false}
                step={1}
            />
            <div className="flex items-center justify-center p-6 custom-create-post-second xl:w-[711px] xl:h-[711px] md:w-[487px] md:h-[487px]">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className=""><MediaIcon className="" /></div>
                    <span className="text-xl">Kéo ảnh và video vào đây</span>
                    <div className="mt-3">
                        <input
                            type="file"
                            accept="image/*,video/*" // Chấp nhận ảnh và video
                            multiple
                            id="image-upload"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="image-upload"
                            className="bg-ig-primary-button py-[7px] px-4 text-sm rounded-lg cursor-pointer hover:bg-ig-primary-button-hover"
                        >
                            Chọn từ máy tính
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputFilePost;
