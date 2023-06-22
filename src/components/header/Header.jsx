import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>Shreyas Joshi</h1>
        <h5 className='text-light'>Frontend Devloper</h5>
        <CTA/>
        <HeaderSocials/>

        {/* <div className='me'>
          <img src={ME} alt='me'></img>
        </div> */}

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header
