import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (

    <div>

      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>

      {/* 
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <About>About</About>
      <Experience>Experience</Experience>
      <Footer>Footer</Footer>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Services></Services> 
      */}

    
    </div>

    // <>
    
      // <Header>Header</Header>
      // <Nav>Nav</Nav>
      // <About>About</About>
      // <Experience>Experience</Experience>
      // <Footer>Footer</Footer>
      // <Testimonials></Testimonials>
      // <Contact></Contact>
      // <Services></Services>
    
      // {/* <Header/>
      // <Nav/>
      // <About/>
      // <Experience/>
      // <Footer/>
      // <Testimonials/>
      // <Contact/>
      // <Services/> */}

    // </>
  )
}

export default App
