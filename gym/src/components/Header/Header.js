import React from 'react'
import './header.css'
import Logo from '../../images/getfitno-logo.webp'
export default function Header() {
  return (
    <div className='header'>
        <img src= {Logo}  className='get-fit-logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}
