import LayoutMain from "../../layouts/LayoutMain";
import ContentRight from "./Components/ContentRight/ContentRight";
import FeedPosts from "./Components/Posts/FeedPosts";

const Home = () => {
    return(
        <LayoutMain>
            <div className="h-screen w-full">
                <div className="flex justify-center pt-10">
                    <FeedPosts />
                    <ContentRight />
                </div>
            </div>
        </LayoutMain>
    )
}

export default Home