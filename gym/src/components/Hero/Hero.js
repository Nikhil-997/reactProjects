import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import Heart from '../../images/heart1.png'
import HeroImg from '../../images/hero.jpeg'
import chart from '../../images/chart.jpeg'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header/>
            <div className='the-best-ad'>
                <div></div>
                <span>The Best!! Wake to reality guys</span>
            </div>
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>If you want something you've never had, you must be willing to do something you've never done</span>
              </div>
            </div>
            <div className='figures'>
              <div>
                <span>+220</span>
                <span>Expert coach</span>
              </div>
              <div>
                <span>+1000</span>
                <span>Members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>Fitness program</span>
              </div>
            </div>

            <div className='hero-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
          <button className='btn'>Join Now</button>
          <div className='heart-rate'>
            <img src={Heart}/>
            <span>Heart Rate</span>
            <span>116 BPM</span>
          </div>
          <img src={HeroImg} className='hero-img'/>
          <div className='calories'>
            <img src={chart} className='chart-img'/>
            <div>
              <span >Calories Burned</span>
            <span className='text stroke-text'>220 Kcal</span></div>
          </div>
        </div>
    </div>
  )
}
