import React, { useState } from "react"

type OnclickTextProps = {
    initialLabel: string
    activeLabel: string
}

const OnclickText: React.FC<OnclickTextProps> = ({ initialLabel, activeLabel }) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(prev => !prev)
    }

    return (
        <div className={`h-auto w-auto cursor-pointer text-xs text-nowrap hover:text-white flex-shrink-0 ${isActive ? "text-[#FAFAFA] hover:text-ig-secondary-text" : "text-[#0095F6]"}`} onClick={handleClick}>
            {isActive ? activeLabel : initialLabel}
        </div>
    )
}

export default OnclickText