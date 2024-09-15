import React, { useState } from "react"


type ItemNotificationPostProps = {
    label: React.ReactNode
    onClick?: () => void
    className?: string
}

const dataLabel: ItemNotificationPostProps[] = [
    {
        label: <label className="cursor-pointer text-red-600" htmlFor="report">Báo cáo</label>
    },
    {
        label: <label className="cursor-pointer text-red-600" htmlFor="unfollow">Bỏ theo dõi</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="favorite">Thêm vào mục yêu thích</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="goto-post">Đi đến bài viết</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="share">Chia sẻ lên...</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="copy">Sao chép liên kết</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="embed">Nhúng</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="about-account">Giới thiệu về tài khoản này</label>
    },
    {
        label: <label className="cursor-pointer" htmlFor="cancel">Hủy</label>,
        onClick: () => { }
    },
]


const ItemNotificationPost: React.FC<ItemNotificationPostProps> = ({ label, onClick, className }) => {
    return (
        <button className={`w-full px-2 py-1 text-sm min-h-12 cursor-pointer ${className}`} onClick={onClick}>
            {label}
        </button>
    )
}

type NotificationPostProps = {
    onClose: () => void
}

const NotificationPost:React.FC<NotificationPostProps> = ({onClose}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false)
        onClose()
    }

    const updatedDataLabel = dataLabel.map(item => {
        if (React.isValidElement(item.label) && item.label.props.htmlFor === "cancel") {
            return { ...item, onClick: handleClose }
        }
        return item
    })
    const getClassName = (index: number) => {
        let startIndex = 0;
        let endIndex = dataLabel.length - 2;

        if (index >= startIndex && index <= endIndex) {
            return 'border-b border-white/10';
        }
        return ''
    }
    return (
        isVisible ? (
            <div className="w-full h-full top-0 left-0 fixed bg-black/50 z-50">
                <div className="w-full h-full flex items-center justify-center ">
                    <div className="w-100 h-auto bg-ig-elevated-background rounded-xl">
                        {updatedDataLabel.map((item, index) => (
                            <ItemNotificationPost
                                key={index}
                                label={item.label}
                                onClick={item.onClick}
                                className={getClassName(index)}
                            />
                        ))}

                    </div>
                </div>
            </div>
        ) : null
    )
}

export default NotificationPost