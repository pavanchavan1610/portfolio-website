import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={hero} alt="" />
      <h1><span>Hello, I’m Pavan Chavan</span> Crafting digital experiences.</h1>
      <p>Welcome! I’m Pavan Chavan, an accomplished web developer with 3 years of specialized expertise in both front-end and back-end development.
        Skilled in HTML, CSS, JavaScript, ReactJS, MySQL, and frameworks like WordPress and Wix, I build responsive, user-centric websites and
        applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1FX4bOtgobcNS_8eplmCnYP5Yga8q03QR/view?usp=sharing">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
