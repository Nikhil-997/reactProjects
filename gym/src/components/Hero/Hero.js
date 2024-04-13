import React from 'react'
import './hero.css'
import Header from '../Header/Header'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header/>
            <div className='the-best-ad'>
                <div></div>
                <span>The Best..!!,Wake to reality guys</span>
            </div>
        </div>
        <div className='right-h'>Right</div>
    </div>
  )
}
