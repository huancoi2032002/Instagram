import React, { useEffect, useRef } from "react";
import { VectorX } from "~/assets";
import { Logo } from "~/assets/logo";

type SwitchAccountProps = {
    onClose: () => void
}

const SwitchAccount:React.FC<SwitchAccountProps> = ({onClose}) => {

    const switchAccountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClose = (event: MouseEvent) => {
            if(switchAccountRef.current && !switchAccountRef.current.contains(event.target as Node)){
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClose)

        return () => document.removeEventListener('mousedown', handleClose)
    })

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
            <div className="w-[400px] h-auto py-[10px] bg-ig-elevated-background rounded-[20px]" ref={switchAccountRef}>
                <div className="w-full flex justify-end pr-5 mt-2 cursor-pointer" onClick={onClose}>
                    <VectorX />
                </div>
                <div>
                    <div className="w-full h-auto flex justify-center">
                        <Logo className="w-175" />
                    </div>
                    <div className="flex flex-col mt-12">
                        <div className="flex justify-center">
                            <input type="text" placeholder="Số điện thoại, tên người dùng hoặc email" className="w-[270px] h-[36px] text-xs bg-black/50 border border-white/15 rounded-[3px] pl-3 mb-2" />
                        </div>
                        <div className="flex justify-center">
                            <input type="password" placeholder="Mật khẩu" className="w-[270px] h-[36px] text-xs bg-black/50 border border-white/15 rounded-[3px] pl-3 mb-2" />
                        </div>
                        <div className="pt-2 pb-2 pl-16">
                            <input
                                type="box-checkbox"
                                className="w-[16px] h-[16px] rounded bg-transparent border border-white"
                            />
                            <span className="pl-2 text-xs">
                                Lưu thông tin đăng nhập
                            </span>
                        </div>
                        <div className="w-full flex justify-center mt-4">
                            <button className="w-[270px] h-[32px] bg-ig-primary-button px-4 rounded-[8px] hover:bg-ig-primary-button-hover">Đăng nhập</button>
                        </div>
                    </div>
                    <div className="pt-4">
                        <span className="flex justify-center text-xs">
                            Quên mật khẩu?
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwitchAccount;