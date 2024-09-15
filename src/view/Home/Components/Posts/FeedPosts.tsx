import React from "react";
import Ngoc1 from "~/assets/1.jpg";
import Ngoc2 from "~/assets/2.jpg";
import Ngoc3 from "~/assets/3.jpg";
import Ngoc4 from "~/assets/4.jpg";
import Ngoc5 from "~/assets/5.jpg";
import Ngoc6 from "~/assets/6.jpg";
import Ngoc7 from "~/assets/7.jpg";
import FeedPost from "./FeedPost";



const dataImage: string[] = [
    Ngoc1,
    Ngoc2,
    Ngoc3,
    Ngoc4,
    Ngoc5,
    Ngoc6,
    Ngoc7,
]


const FeedPosts = () => {
    return(
        <div className="max-w-[702px] flex flex-col items-center justify-center gap-6">
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
            <FeedPost username="Nauh" images={dataImage} avatar={Ngoc7} titlePost="Hi"/>
        </div>
    )
}

export default FeedPosts