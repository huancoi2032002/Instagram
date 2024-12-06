import { LogoFB, LogoXL } from "~/assets/logo";
import './Register.scss';
import React, { useState } from "react";
import { EyeIcon, HiddenEyeIcon } from "~/assets";
import { Link } from "react-router-dom";
import DownloadAPK from '~/assets/downloadapk.png';
import DownloadIOS from '~/assets/downloadios.png';
import Footer from "~/components/Footer/Footer";

const Register = () => {
    const [formData, setFormData] = useState({
        mobileNumberOrEmail: "",
        fullname: "",
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("https://dacnbe.onrender.com/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Đăng ký thành công!");
                // Điều hướng tới trang khác nếu cần thiết
            } else {
                setErrorMessage(result.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
            }
        } catch (error) {
            setErrorMessage("Không thể kết nối tới máy chủ. Vui lòng thử lại.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full h-full">
            <main className="w-full h-full py-4 flex flex-col items-center justify-center gap-4">
                <div className="w-[350px] py-3 border border-white/20 flex flex-col items-center">
                    <div className="mt-9 mb-3">
                        <LogoXL />
                    </div>
                    <form className="w-full flex flex-col items-center mb-6" onSubmit={handleSubmit}>
                        <span className="w-[268px] text-base text-center">
                            Đăng ký để xem ảnh và video từ bạn bè.
                        </span>
                        <div className="py-2">
                            <button
                                type="button"
                                className="flex items-center py-2 px-3 rounded-lg text-sm gap-2 bg-ig-primary-button hover:bg-ig-primary-button-hover"
                            >
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
                                <input
                                    type="text"
                                    name="mobileNumberOrEmail"
                                    value={formData.mobileNumberOrEmail}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="underline"></div>
                                <label>Số di động hoặc email</label>
                            </div>
                            <div className="input-data h-10">
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="underline"></div>
                                <label>Tên đầy đủ</label>
                            </div>
                            <div className="input-data h-10">
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="underline"></div>
                                <label>Tên người dùng</label>
                            </div>
                            <div className="input-data h-10">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="underline"></div>
                                <label>Mật khẩu</label>
                                <div className="absolute right-1">
                                    {formData.password && (
                                        showPassword ? (
                                            <div className="cursor-pointer" onClick={togglePassword}>
                                                <HiddenEyeIcon className="fill-white w-4 h-4" />
                                            </div>
                                        ) : (
                                            <div className="cursor-pointer" onClick={togglePassword}>
                                                <EyeIcon className="fill-white w-4 h-4" />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 text-xs mb-2">
                                {errorMessage}
                            </div>
                        )}
                        <div className="w-full py-2 flex items-center justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-[268px] text-xs bg-ig-primary-button py-2 px-4 rounded-lg hover:bg-ig-primary-button-hover"
                            >
                                {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
                            </button>
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
