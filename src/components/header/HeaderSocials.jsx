import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/shreyas-joshi-462697163/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/shreyas14121999' target='_blank'><BsGithub/></a>
      <a href='http://facebook.com' target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
