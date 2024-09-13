import React from "react"
import { Link } from "react-router-dom"

type ButtonProps = {
    type?: string
    title: string
    link: string
}

const Button:React.FC<ButtonProps> = ({title, link}) => {
    return(
        <div className="w-auto h-auto ">
            <button className="xl:h-8 h-auto px-4 text-sm bg-ig-bg-button rounded-md"><Link to={link}>{title}</Link></button>
        </div>
    )
}

export default Button