import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sc1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Word</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=''></img>
          </div>

          <h3>Create Social Network Website Design Like Facebook.</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://frontend-jsk-facebook-design.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''></img>
          </div>

          <h3>This is a Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shreyas14121999/Facebook' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=''></img>
          </div>

          <h3>This is a Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shreyas14121999/Facebook' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt=''></img>
          </div>

          <h3>This is a Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shreyas14121999/Facebook' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article> */}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=''></img>
          </div>

          <h3>This is a Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shreyas14121999/Facebook' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article> */}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=''></img>
          </div>

          <h3>This is a Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://github.com/shreyas14121999/Facebook' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio
