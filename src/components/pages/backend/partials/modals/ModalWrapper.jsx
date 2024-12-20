import React, { Children } from 'react'

const ModalWrapper = ({children, zIndex="z-50"}) => {
  return (
    <>
      <div className={`modal fixed h-screen w-full top-0 left-0 ${zIndex}`}>
        <div className="backdrop w-full h-full bg-black bg-opacity-90"></div>
        {children}
      </div>
    </>
  );
}

export default ModalWrapper