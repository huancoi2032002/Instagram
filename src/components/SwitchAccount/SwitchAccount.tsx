import { VectorX } from "~/assets";
import { Logo } from "~/assets/logo";


const SwitchAccount: React.FC= () => {
    return (
        <div>
            <div>
                <div>
                    <VectorX />
                </div>
                <div>
                    <Logo />
                </div>
                <div>
                    <input type="text" placeholder="Số điện thoại, tên người dùng hoặc email" />
                </div>
                <div>
                    <input type="password" placeholder="Mật khẩu" />
                </div>
            </div>
        </div>
    );
}

export default SwitchAccount;