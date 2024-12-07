import React, { useState } from "react";

type OnclickTextProps = {
    initialLabel: string;
    activeLabel: string;
    onClick: () => void;
};

const OnclickText: React.FC<OnclickTextProps> = ({ initialLabel, activeLabel, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(prevState => !prevState); // Toggle trạng thái isActive
        onClick(); // Gọi onClick ngoài để xử lý hành động khác nếu cần
    };

    return (
        <div
            className={`h-auto w-auto cursor-pointer text-xs text-nowrap hover:text-white flex-shrink-0 ${isActive ? "text-[#FAFAFA] hover:text-ig-secondary-text" : "text-[#0095F6]"
                }`}
            onClick={handleClick} // Gọi handleClick khi click vào div
        >
            {isActive ? activeLabel : initialLabel} {/* Hiển thị label tương ứng */}
        </div>
    );
};

export default OnclickText;
