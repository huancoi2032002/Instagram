import { MediaIcon, VectorX } from "~/assets"


const CreatePost = () => {

    

    return (
        <div className="w-screen h-screen bg-gray-500/20 absolute top-0">
            <div className="w-full h-full flex items-center justify-center relative">
                <div className="w-[34px] h-[34px] absolute top-6 right-2 cursor-pointer">
                    <VectorX className="w-[18px] h-[18px]" />
                </div>
                <div className="h-auto w-auto">
                    <div className="w-[487px] bg-ig-elevated-background rounded-xl">
                        <div className="py-3 border-b border-white/10">
                            <div className="text-sm font-semibold text-center">
                                Tạo bài viết mới
                            </div>
                        </div>
                        <div className="w-[487px] h-[487px] flex items-center justify-center p-6">
                            <div className="flex flex-col items-center justify-center gap-5">
                                <div className=""><MediaIcon className="" /></div>
                                <span className="text-xl">Kéo ảnh và video vào đây</span>
                                <div className="mt-3">
                                    <input type="file" multiple id="image-upload" className="hidden"/>
                                    <label htmlFor="image-upload" className=" bg-ig-primary-button py-[7px] px-4 text-sm rounded-lg cursor-pointer hover:bg-ig-primary-button-hover">Chọn từ máy tính</label>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default CreatePost