import React from 'react'

const Pills = ({isActive}) => {
  return (
    <span 
    className={`text-[8px] px-2 py-0.5  rounded-full  w-[50px]  text-center bg-opacity-20 border
      ${isActive ? " bg-success border-success text-success " : "bg-gray-300 border-gray-600 text-gray-200"}`}>
      {isActive ? "Active" : "Inactive"}
      </span>
  )
}

export default Pills