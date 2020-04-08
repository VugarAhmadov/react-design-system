import React from 'react'

export interface IconProps{
    classe: string;
    style: React.CSSProperties
}

export default (props :IconProps) => (
    <svg viewBox="0 0 229.153 229.153" className={props.classe} style={props.style}>
        <path d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
        C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
        c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
        C36.794,165.501,64.017,194.924,92.356,223.549z"/>
    </svg>
)
