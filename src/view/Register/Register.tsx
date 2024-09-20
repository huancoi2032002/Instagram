import { LogoFB, LogoXL } from "~/assets/logo";
import './Register.scss'
import React, { useState } from "react";
import { EyeIcon, HiddenEyeIcon } from "~/assets";
import { Link } from "react-router-dom";
import DownloadAPK from '~/assets/downloadapk.png';
import DownloadIOS from '~/assets/downloadios.png'
import Footer from "~/components/Footer/Footer";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [inputText, setInputText] = useState("");

    const togglePassword = () => {
        return (
            setShowPassword(prev => !prev)
        )
    }

    const handleIpnut = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    return (
        <section className="w-full h-full">
            <main className="w-full h-full py-4 flex flex-col items-center justify-center gap-4">
                <div className="w-[350px] py-3 border border-white/20 flex flex-col items-center">
                    <div className="mt-9 mb-3">
                        <LogoXL />
                    </div>
                    <form className="w-full flex flex-col items-center mb-6">
                        <span className="w-[268px] text-base text-center">Đăng ký để xem ảnh và video từ bạn bè.</span>
                        <div className="py-2">
                            <button className="flex items-center py-2 px-3 rounded-lg text-sm gap-2 bg-ig-primary-button hover:bg-ig-primary-button-hover">
                                <span><LogoFB className="w-5 h-5 fill-white" /></span>
                                Đăng nhập bằng Facebook
                            </button>
                        </div>
                        <div className="w-[268px] h-10 flex items-center">
                            <div className="flex-shrink flex-grow h-[1px] bg-ig-separator"></div>
                            <div className="px-4"><span className="text-sm">HOẶC</span></div>
                            <div className="flex-shrink flex-grow h-[1px] bg-ig-separator"></div>
                        </div>
                        <div className="flex flex-col gap-5 mt-4 mb-4">
                            <div className="input-data h-10">
                                <input type="text" className="" required />
                                <div className="underline"></div>
                                <label htmlFor="">Số di động hoặc email</label>
                            </div>
                            <div className="input-data h-10">
                                <input type="text" className="" required />
                                <div className="underline"></div>
                                <label htmlFor="">Tên đầy đủ</label>
                            </div>
                            <div className="input-data h-10">
                                <input type="text" className="" required />
                                <div className="underline"></div>
                                <label htmlFor="">Tên người dùng</label>
                            </div>
                            <div className="input-data h-10">
                                <input type={`${showPassword ? 'text' : 'password'}`} className="" required onInput={handleIpnut} />
                                <div className="underline"></div>
                                <label htmlFor="">Mật khẩu</label>
                                <div className="absolute right-1">
                                    {inputText && (
                                        showPassword ? <div className="cursor-pointer" onClick={togglePassword}><HiddenEyeIcon className="fill-white w-4 h-4" /></div> : <div className="cursor-pointer" onClick={togglePassword}><EyeIcon className="fill-white w-4 h-4" /></div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 pb-4">
                            <div className="w-[268px] h-12 flex items-center justify-center">
                                <span className="text-xs text-ig-primary-text text-center">
                                    Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram.
                                    <Link to="" className="text-ig-link-primary text-xs"> Tìm hiểu thêm</Link>
                                </span>
                            </div>
                            <div className="w-[268px] h-12 flex items-center justify-center">
                                <span className="text-xs text-ig-primary-text text-center">
                                    Bằng cách đăng ký, bạn đồng ý với <Link to="" className="text-ig-link-primary text-xs">Điều khoản</Link>, <Link to="" className="text-ig-link-primary text-xs">Chính sách quyền riêng tư</Link> và <Link to="" className="text-ig-link-primary text-xs">Chính sách cookie</Link> của chúng tôi.
                                </span>
                            </div>
                        </div>
                        <div className="w-full py-2 flex items-center justify-center">
                            <button className="w-[268px] text-xs bg-ig-primary-button py-2 px-4 rounded-lg hover:bg-ig-primary-button-hover">Đăng ký</button>
                        </div> 
                    </form>
                </div>
                <div className="w-[350px] h-auto py-3 border border-white/20">
                    <div className="h-[70px] flex items-center justify-center">
                        <span>Bạn có tài khoản? <Link to="/login" className="text-ig-primary-button text-sm">Đăng nhập</Link></span>
                    </div>
                </div>
                <div>
                    <span className="text-sm">Tải ứng dụng.</span>
                </div>
                <div className="w-[350px] flex justify-between px-12">
                    <div className="flex-grow h-10 cursor-pointer">
                        <img src={DownloadAPK} className=" h-full object-cover" />
                    </div>
                    <div className="flex-grow h-10 flex justify-end cursor-pointer">
                        <img src={DownloadIOS} className="h-full object-cover" />
                    </div>
                </div>
            </main>
            <div className="mb-5 mt-5">
                <Footer />
            </div>
        </section>
    );
};

export default Register;
