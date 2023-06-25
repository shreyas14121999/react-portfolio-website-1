import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q6ux5vl', 'template_2xeiaf4', form.current, 'va6P9hcE9OAdaYaGM')
      e.target.reset()
  };

  return (
  <section id='contact'> 
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact__option'>
    <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>shreyasjoshi145@gmail.com</h5>
      <a href="mailto:shreyasjoshi145@gmail.com" target='_blank'>Send a Message</a>
    
    </article>
    <article className='contact__option'>
      <BsInstagram className='contact__option-icon' />
      <h4>Instagram</h4>
      <h5>__shreyas__joshi__</h5>
      {/* <a href="https://m.me/jsk.achiever" target='_blank'>Send a Message</a> */}
      <a href="https://www.instagram.com/__shreyas__joshi__/" target='_blank'>Send a Message</a>
    </article>

    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>What's App</h4>
      <h5>+91 7383843529</h5>
      <a href="https://api.whatsapp.com/send?phone=+917383843529" target='_blank'>Send a Message</a>
    </article>
    </div>

  {/* END OF CONTACT OPTIONS */}

  <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required/>
    <input type='email' name='email' placeholder='Your Email'required/>
    <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required/>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
  </div>
  </section>
  )
}

export default Contact


// git push -u origin master
// remote: Permission to shreyas14121999/React_Portfolio.git denied to HKJ145.
// fatal: unable to access 'https://github.com/shreyas14121999/React_Portfolio.git/': The requested URL returned error: 403


