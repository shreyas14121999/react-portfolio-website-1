import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Sc2.png'
import IMG2 from '../../assets/portfolio2.jpg'
import form from '../../assets/form1.png'
import todo from '../../assets/todo1.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
import ps1 from '../../assets/pf1.png'
import amazon from '../../assets/amazon1.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Word</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ps1} alt=''></img>
          </div>

          <h3>My React Portfolio using ReactJS.</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/react-portfolio-website-1' className='btn' target='_blank'>GitHub</a>
          <a href='https://shreyas-react-portfolio.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todo} alt=''></img>
          </div>

          <h3>Create ToDo App using ReactJS.</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://react-todo-shreyas.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={amazon} alt=''></img>
          </div>

          <h3>Amazon Clone using Html and CSS.</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Amazon_Frontend' className='btn' target='_blank'>GitHub</a>
          <a href='https://frontend-amazon-clone.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=''></img>
          </div>

          <h3>Facebook Clone using Html and CSS.</h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Facebook' className='btn' target='_blank'>GitHub</a>
          <a href='https://frontend-jsk-facebook-design.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>

      
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={form} alt=''></img>
          </div>

          <h3>Creating an Simple React Register Form. </h3>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/shreyas14121999/Register-Form' className='btn' target='_blank'>GitHub</a>
          <a href='https://simple-register-form.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          
          </div>
        </article>

        

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
