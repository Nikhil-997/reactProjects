import React from 'react'
import Image1 from  '../../images/image-1.jpeg'
import Image2 from  '../../images/image2.jpeg'
import Image3 from  '../../images/image3.jpeg'
import Image4 from  '../../images/image4.webp'
import './Reasons.css'
const Reasons = () => {
  return (
    <div className='Reasons' id='Reasons'>
        <div className='left-r'>
            <img src={Image1}/>
            <img src={Image2}/>
            <img src={Image3}/>
            <img src={Image4}/>
        </div>
        <div className='right-r'></div>
    </div>
  )
}

export default Reasons