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
            if (!["image/", "video/"].some(type => file.type.startsWith(type))) {
                reject(new Error("Unsupported file type"));
                return;
            }
            const reader = new FileReader();
            if (file.type.startsWith("image/")) {
                reader.readAsDataURL(file);
            } else {
                resolve(URL.createObjectURL(file));
            }
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = () => reject(new Error("Failed to read file"));
        });
    };


    const MAX_FILE_SIZE_MB = 10; // Example limit: 10MB
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const validFiles = Array.from(files).filter(file => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024);

            if (validFiles.length < files.length) {
                alert("Some files were too large and were skipped.");
            }

            const base64OrBlobFiles = await Promise.all(
                validFiles.map((file) => fileToBase64OrBlob(file))
            );

            const updatedFiles = [...selectedFiles, ...base64OrBlobFiles];
            setSelectedFiles(updatedFiles);

            setTimeout(() => {
                if (updatedFiles.length > 0) {
                    console.log('Updated session storage:', updatedFiles);
                    onFilesSelected();
                }
            }, 0);
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
