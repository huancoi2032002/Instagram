import { useState } from "react";
import { CameraIcon, CommentIcon, FavouriteIcon, LoveIcon } from "~/assets";
import CreatePost from "~/components/CreatePosts/CreatePost";
import './Styles.scss';
import Ngoc1 from "~/assets/1.jpg";
import Ngoc2 from "~/assets/2.jpg";
import Ngoc3 from "~/assets/3.jpg";
import Ngoc4 from "~/assets/4.jpg";
import Ngoc5 from "~/assets/5.jpg";
import Ngoc6 from "~/assets/6.jpg";
import Ngoc7 from "~/assets/7.jpg";

const ItemArticle = () => {
    return (
        <div className="image-container group cursor-pointer">
            <img src={Ngoc1} className="w-full h-full object-cover" />
            <div className="absolute w-full h-full left-0 top-0 z-20 flex justify-center items-center lg:gap-8 md:gap-4 bg-black/40 hidden group-hover:flex">
                <div className="flex items-center gap-1">
                    <FavouriteIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">16.2N</span>
                </div>
                <div className="flex items-center gap-1">
                    <CommentIcon className="w-5 h-5 fill-white" />
                    <span className="font-bold">109</span>
                </div>
            </div>
        </div>
    )
}

const Article = () => {
    const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);

    const handleOpenCreatePost = () => {
        setIsOpenCreatePost(true);
    };

    const handleCloseCreatePost = () => {
        setIsOpenCreatePost(false);
    };

    return (
        <div className="">
            <div className="w-full flex justify-center">
                <div className="w-[350px] flex flex-col items-center my-[60px] xl:mx-[44px] gap-4">
                    <CameraIcon />
                    <span className="text-[30px] font-bold">Chia sẻ ảnh</span>
                    <span className="text-center text-sm">Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.</span>
                    <div className="text-sm text-ig-primary-button cursor-pointer hover:text-white" onClick={handleOpenCreatePost}>
                        Chia sẻ ảnh đầu tiên của bạn
                    </div>
                </div>
            </div>
            {/* Đóng CreatePost khi onClose được gọi */}
            <div className="w-full absolute top-0 left-0">
                {isOpenCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
            </div>
            <div className="w-full z-10">
                <div className="grid grid-cols-3 gap-1">
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                    <ItemArticle />
                </div>
            </div>
        </div>
    );
};

export default Article 