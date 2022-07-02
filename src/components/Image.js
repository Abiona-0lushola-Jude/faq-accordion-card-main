import React from 'react'
import img from "./images/illustration-woman-online-desktop.svg"
import box from "./images/illustration-box-desktop.svg"
import svg from "./images/bg-pattern-desktop.svg"

const Image = () => {
  return (
    <div className='img--container'>
        <div className='svg'>
             <img src={svg} alt="svg--icon"/>
        </div>
     <img src={box} alt='box' className='box'/>
     <img src={img} alt='illstration-woman-online-desktop'  className='woman-svg'/>
    </div>
  )
}

export default Image
