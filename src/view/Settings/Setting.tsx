import LayoutMain from "~/layouts/LayoutMain";
import UserEdit from "./Components/UserEdit";
import './Components/Styles.scss'
import SidebarSetting from "./Components/SidebarSetting";
import { Route, Routes } from "react-router-dom";


const Setting = () => {
    return (
        <LayoutMain>
            <div className="flex h-screen w-full">
                <SidebarSetting />
                <Routes>
                    <Route path="/edit" element={<UserEdit UserID="nauh" UserAvatar={""} />}/> {/*Cấu hình thêm ở đây như notificaiton hay private các thứ*/ }
                </Routes>
            </div>
        </LayoutMain>
    );
};

export default Setting;
