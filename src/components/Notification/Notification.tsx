import React from "react";
import { LogoMobile } from "~/assets/logo";
import './Notification.scss'

type TNotification = {
    des: string
    dateTime: string
}
const DataNotification = [
    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },
    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },
    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },
    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },
    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },

    {
        des: 'Bạn có 1 người theo dõi mới.',
        dateTime: '8h'
    },
]
const ItemNotification: React.FC<TNotification> = ({des, dateTime}) => {
    return (
        <div className="flex items-center py-2 px-6 hover:bg-gray-300/30">
            <div className="flex items-center cursor-pointer">
                <div className="w-11 h-11 flex items-center">
                    <LogoMobile className="" />
                </div>
                <span className="text-sm">{des} {dateTime}</span>
            </div>
        </div>
    )
}

const Notification = () => {
    return (
        <div className="h-screen w-[397px] border-r border-white/20 rounded-xl text-[#F5F5F5] scroll-container">
            <h1 className="text-2xl font-semibold px-6 py-4">Thông báo</h1>
            <div className="">
                <h2 className="font-semibold px-6 text-base py-2">Hôm nay</h2>
                {DataNotification.map((item) => (
                    <ItemNotification 
                        des={item.des}
                        dateTime={item.dateTime}
                    />
                ))}
            </div>
            <div className="">
                <h2 className="font-semibold px-6 text-base py-2">Hôm qua</h2>
                {DataNotification.map((item) => (
                    <ItemNotification 
                        des={item.des}
                        dateTime={item.dateTime}
                    />
                ))}
            </div>
            <div className="">
                <h2 className="font-semibold px-6 text-base py-2">Hôm qua</h2>
                {DataNotification.map((item) => (
                    <ItemNotification 
                        des={item.des}
                        dateTime={item.dateTime}
                    />
                ))}
            </div>
        </div>
    )
}

export default Notification