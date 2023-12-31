import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skils I have</h5>
      <h2>My Experience</h2>
      
      <div>
        <div className="experience__container">
          
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Advance</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
              </article>
              
              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>Tailwind</h4>
                    <small className='text-light'>Basic</small>
                   </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                   <h4>React JS</h4>
                    <small className='text-light'>Intermediate</small>
                   </div>
              </article>
            </div>
          </div>

                    {/* END OF FROENTED */}

          {/* <div className="experience__backend">
          <h3>Backend Devlopment</h3>
            <div className="experience__content">
              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Exprience</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Mongo DB</h4>
                    <small className='text-light'>Intermediate</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Exprience</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                    <h4>MySQL</h4>
                    <small className='text-light'>Exprience</small>
                   </div>
              </article>
              
              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Python</h4>
                    <small className='text-light'>Exprience</small>
                    </div>
              </article>

              <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                   <div>
                    <h4>Pic</h4>
                    <small className='text-light'>Exprience</small>
                   </div>
              </article>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default experience
