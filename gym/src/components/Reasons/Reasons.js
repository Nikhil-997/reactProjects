import React from 'react'
import Image1 from  '../../images/image-1.jpeg'
import Image2 from  '../../images/image2.jpeg'
import Image3 from  '../../images/image3.jpeg'
import Image4 from  '../../images/image4.webp'
import tick from  '../../images/tick3.webp'
import MuscleBlaze from  '../../images/mb.png'
import Nike from  '../../images/nike.jpeg'
import OptimumNutrition from  '../../images/on.png'
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
        <div className='right-r'>
          <span className='stroke-text'>Somw reasons</span>
          <div>
            <span>Why </span>
            <span>choose us?</span>
          </div>
          <div className='details-r'>
            <div><img className='tick' src={tick} ></img><span>OVER 140+ EXPERT COACHS</span></div>
            <div><img className='tick' src={tick} ></img><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
            <div><img className='tick' src={tick} ></img><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
            <div><img className='tick' src={tick} ></img><span>RELIABLE PARTNERS</span></div>
          </div>
          <span className='our-partner'>Our Partners</span>
          <div className='partner-logo-container'>
            <img className='partners-logo' src={Nike}/>
            <img className='partners-logo' src={OptimumNutrition}/>
            <img className='partners-logo'  src={MuscleBlaze}/>
          </div>
        </div>
    </div>
  )
}

export default Reasons