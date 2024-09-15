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
    <div className={`h-auto w-auto cursor-pointer ${isActive ? "text-[#FAFAFA]" : "text-[#0095F6]"}`} onClick={handleClick}>
            {isActive ? activeLabel : initialLabel}
        </div>
    )
}

export default OnclickText