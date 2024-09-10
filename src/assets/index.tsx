import React from "react"
import { SvgProps } from "~/store/Svg/SvgProps"

export const VectorX: React.FC<SvgProps> = ({ className }) => (
    <svg aria-label="Đóng" className={className} fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16">
        <title>Đóng</title>
        <polyline className={className} fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
        <line className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
    </svg>
)

export const SearchIcon: React.FC<SvgProps> = ({ className }) => (
    <svg aria-label="Tìm kiếm" className={className} fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16">
        <title>Tìm kiếm</title>
        <path className={className} d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        <line className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
    </svg>
)

export const SavedIcon: React.FC<SvgProps> = ({ className }) => (
    <svg aria-label="Saved" className={className} fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18">
        <title>Saved</title>
        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
    </svg>
)