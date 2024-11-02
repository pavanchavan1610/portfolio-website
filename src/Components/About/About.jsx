import React from 'react'
import './About.css'
import hero from '../../assets/hero.jpeg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={hero} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi! I’m Pavan Chavan, a web developer with 3 years of hands-on experience in both front-end
                            and back-end development. Leveraging my skills in HTML, CSS, JavaScript, ReactJS, MySQL,
                            and platforms like WordPress and Wix, I create responsive, user-focused digital solutions.
                        </p>
                        <p>I work seamlessly with designers and project managers to blend creativity with functionality.
                            Committed to clean code, sleek designs, and keeping up with tech innovations, I turn visions
                            into dynamic digital realities.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>WordPress</p><hr style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>3+</h1>
                    <p>Years Of Experiance</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>50+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>30+</h1>
                    <p>Happy Clients</p>
                </div>

            </div>

        </div>
    )
}

export default About
