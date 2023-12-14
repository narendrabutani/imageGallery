import React from 'react'

const SectionTitle:React.FC<{title:string,description?:string,titleClass?:string}> = (props) => {
  return (
    <div className='flex flex-col gap-8'>
        <h1 className={`text-5xl text-center font-semibold leading-[54px] ${props.titleClass}`}>{props.title}</h1> 
        <p className="max-w-2xl text-center font-light text-gray-700">
          {props.description ?? ""}
        </p>
    </div>
  )
}

export default SectionTitle