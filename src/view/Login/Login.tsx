import { LogoFB, LogoXL } from "~/assets/logo";
import React, { useEffect, useState } from "react";
import { EyeIcon, HiddenEyeIcon } from "~/assets";
import { Link } from "react-router-dom";
import DownloadAPK from '~/assets/downloadapk.png';
import DownloadIOS from '~/assets/downloadios.png';
import Footer from "~/components/Footer/Footer";
import HomePhones from "~/assets/screenshot/home-phones.png";
import ScreenShot1 from '~/assets/screenshot/screenshot1.png';
import ScreenShot2 from '~/assets/screenshot/screenshot2.png';
import ScreenShot3 from '~/assets/screenshot/screenshot3.png';
import ScreenShot4 from '~/assets/screenshot/screenshot4.png';
import './Login.scss';

const dataSlideShow: { image: string }[] = [
    { image: ScreenShot1 },
    { image: ScreenShot2 },
    { image: ScreenShot3 },
    { image: ScreenShot4 }
]

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [inputText, setInputText] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        mobileNumberOrEmailOrUsername: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const totalSlides = dataSlideShow.length


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 4000)

        return () => clearInterval(interval);
    }, [totalSlides])

    const togglePassword = () => {
        return (
            setShowPassword(prev => !prev)
        )
    }

    const handleIpnut = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;
        setErrorMessage("");

        if (!formData.mobileNumberOrEmailOrUsername.trim()) {
            setErrorMessage("Vui lòng nhập email hoặc số điện thoại.");
            return;
        }
        if (!formData.password.trim()) {
            setErrorMessage("Vui lòng nhập mật khẩu.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Gửi yêu cầu tới API
            const response = await fetch("https://dacnbe.onrender.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json(); // Parse JSON từ API
            console.log(result);
            if (response.ok) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("authToken", result.user.accessToken); // Lưu token
                localStorage.setItem("userID", result.user._id);
                window.location.href = "/"; // Chuyển hướng
            } else {
                setErrorMessage(result.message || "Đăng nhập thất bại. Vui lòng thử lại.");
            }
        } catch (error) {
            setErrorMessage("Không thể kết nối tới máy chủ. Vui lòng thử lại.");
        } finally {
            setIsSubmitting(false); // Kết thúc trạng thái gửi dữ liệu
        }
    };

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <main className="w-full h-full flex items-center justify-center">
                <div className="relative">
                    <div className="ml-[-46px]">
                        <img src={HomePhones} />
                    </div>
                    <div className="absolute top-[26px] left-[110px] w-full h-full">
                        {dataSlideShow.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <img src={slide.image} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-[350px] py-3 border border-white/20 flex flex-col items-center">
                        <div className="mt-9 mb-3">
                            <LogoXL />
                        </div>
                        <form className="w-full flex flex-col items-center mb-6">
                            {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
                            <div className="flex flex-col gap-5 mt-4 mb-4">
                                <div className="input-data h-10">
                                    <input type="text" className="" required value={formData.mobileNumberOrEmailOrUsername} onChange={handleChange} name="mobileNumberOrEmailOrUsername" />
                                    <div className="underline"></div>
                                    <label htmlFor="">Số điện thoại, tên người dùng hoặc email</label>
                                </div>

                                <div className="input-data h-10">
                                    <input
                                        type={`${showPassword ? 'text' : 'password'}`}
                                        className=""
                                        required
                                        onInput={handleIpnut}
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"
                                    />
                                    <div className="underline"></div>
                                    <label htmlFor="">Mật khẩu</label>
                                    <div className="absolute right-1">
                                        {inputText && (
                                            showPassword ? <div className="cursor-pointer" onClick={togglePassword}><HiddenEyeIcon className="fill-white w-4 h-4" /></div> : <div className="cursor-pointer" onClick={togglePassword}><EyeIcon className="fill-white w-4 h-4" /></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full py-2 flex items-center justify-center">
                                <button className="w-[268px] text-xs bg-ig-primary-button py-2 px-4 rounded-lg hover:bg-ig-primary-button-hover" onClick={handleSubmit} disabled={isSubmitting} >{isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}</button>
                            </div>
                            <div className="w-[268px] h-10 flex items-center">
                                <div className="flex-shrink flex-grow h-[1px] bg-ig-separator/20"></div>
                                <div className="px-4"><span className="text-sm">HOẶC</span></div>
                                <div className="flex-shrink flex-grow h-[1px] bg-ig-separator/20"></div>
                            </div>
                            <div className="py-2">
                                <button className="flex items-center py-2 px-3 rounded-lg text-sm gap-2 ">
                                    <span><LogoFB className="w-5 h-5 fill-white" /></span>
                                    Đăng nhập bằng Facebook
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-[350px] h-auto py-3 border border-white/20">
                        <div className="h-[70px] flex items-center justify-center">
                            <span>Bạn có tài khoản? <Link to="/register" className="text-ig-primary-button text-sm">Đăng ký</Link></span>
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
                </div>
            </main>
            <div className="mb-5 mt-5">
                <Footer />
            </div>
        </section>
    );
};

export default Login;
