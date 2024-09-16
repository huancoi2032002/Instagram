import LayoutMain from "../../layouts/LayoutMain";
import FeedPosts from "./Components/Posts/FeedPosts";

const Home = () => {
    return(
        <LayoutMain>
            <div className="h-screen w-full">
                <FeedPosts />
            </div>
            <div></div>
        </LayoutMain>
    )
}

export default Home