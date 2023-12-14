import React from 'react'

const Label:React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    active:string;
}> = ({children,...props}) => {
  return (
    <p className={`px-5 py-3 rounded-xl ${props.active == "true" ? "bg-green-500 text-white":"bg-white border border-1 border-green-500"} font-bold leading-3 text-lg  cursor-pointer`} {...props}>{children}</p>
  )
}

export default Label