import React from 'react'
import './about.css'
import ME from '../../assets/2.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Fresher</h5>
              {/* <small>Fresher</small> */}
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ </small>
            </article> */}

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
            <p>
              Lorem ipsum dolor sit
               amet consectetur adipisicing elit.
               Esse nostrum ut hic? Eos deserunt obcaecati
               , cum, non expedita ea, neque ad a dolore excepturi illo quis et minima porro accusamus.
            </p>
            <a href='#contact' className=' btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
