import React from "react"
import { SvgProps } from "~/store/Svg/SvgProps"

export const VectorX: React.FC<SvgProps> = ({ className }) => (
    <svg aria-label="Đóng" className={className} fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16">
        <title>Đóng</title>
        <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="3"></polyline>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
    </svg>
)