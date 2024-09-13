import React from "react"


type NotificationPostProps = {
    cancel: () => void
    close: () => void
}

const NotificationPost: React.FC<NotificationPostProps> = ({ cancel, close }) => {
    return (
        <div className="absolute w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="w-100 h-[202px] flex flex-col bg-ig-elevated-background rounded-xl">
                <div className="flex flex-col justify-center items-center gap-1 p-[27px]">
                    <span className="text-xl">Bỏ bài viết?</span>
                    <span className="text-ig-secondary-text text-sm">Nếu rời đi, bạn sẽ mất những gì vừa chỉnh sửa.</span>
                </div>
                <button className="min-h-12 py-1 px-2 text-sm text-ig-error-or-destructive border-t border-white/10" onClick={cancel}>Bỏ</button>
                <button className="min-h-12 py-1 px-2 text-sm text-ig-primary-text border-t border-white/10" onClick={close}>Hủy</button>
            </div>
        </div>
    )
}

export default NotificationPost