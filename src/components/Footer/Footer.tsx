import React from "react"
import { Link } from "react-router-dom"
import { DownArrowIcon } from "~/assets"

type TFooter = {
    span: string
    link?: string
}

const ItemFooter:React.FC<TFooter> = ({span, link}) => {
    return(
        <div className="">
            <Link to={link || ""} className="cursor-pointer">
                <span className="text-xs text-ig-secondary-text">{span}</span>
            </Link>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="w-full mb-[52px]">
            <div className="w-full flex flex-col gap-4">
                <div className="w-full flex justify-center items-center flex-wrap gap-4">
                    <ItemFooter span="Meta" />
                    <ItemFooter span="Giới thiệu" />
                    <ItemFooter span="Blog" />
                    <ItemFooter span="Việc làm" />
                    <ItemFooter span="Trợ giúp" />
                    <ItemFooter span="API" />
                    <ItemFooter span="Quyền riêng tư" />
                    <ItemFooter span="Điều khoản" />
                    <ItemFooter span="Vị trí" />
                    <ItemFooter span="Instagram Lite" />
                    <ItemFooter span="Threads" />
                    <ItemFooter span="Tải thông tin người liên hệ lên & người không phải người dùng" />
                    <ItemFooter span="Meta đã xác minh" />
                </div>
                <div className="w-full flex justify-center items-center flex-wrap gap-4">
                    <div className="text-xs text-ig-secondary-text flex items-center gap-1">
                        <span>Tiếng Việt</span> 
                        <DownArrowIcon className="rotate-180 w-3 h-3"/>
                    </div>
                    <div className="text-xs text-ig-secondary-text flex items-center gap-1">
                        <span>© 2024 Instagram from Meta</span> 
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer