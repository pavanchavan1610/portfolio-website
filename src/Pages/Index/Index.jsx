import React from 'react'
import './Index.css'
import hero from '../../assets/hero.jpeg'
import Itorix from '../../assets/Itorixinfotech.png'
import set from '../../assets/set.webp'
import bharat from '../../assets/bharat.webp'
import allflow from '../../assets/allflow.webp'
import oprive from '../../assets/oprive.webp'
import vision from '../../assets/vision.webp'
import master from '../../assets/master.webp'
import heramb from '../../assets/heramb.webp'
import { Link } from 'react-router-dom'
import '../Contact/contact'


const home = () => {
    return (
        <div>
            {/* Hero Section*/}
            <div id='home' className='hero'>
                <img src={hero} alt="" />
                <h1><span>Hello, I’m Pavan Chavan</span> Building Impactful Digital Solutions</h1>
                <p>I specialize in designing and developing responsive websites and
                    applications that merge functionality with visual appeal.
                    With expertise in front-end and back-end technologies, I
                    transform ideas into efficient and impactful digital solutions.
                </p>
                <div className="hero-action">
                    <div className="hero-connect"><Link to='/contact'>Connect With Me</Link></div>
                    <div className="hero-resume"><Link to="https://drive.google.com/file/d/1mfmcw6gDsgSYWdDL7Ov4SJ2dsXD-pCrc/view?usp=sharing">My Resume</Link></div>
                </div>
            </div>



            {/* About US Section*/}
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
                            <p>Hi! I’m Pavan, A Web Developer with 3 years of experience in building responsive websites and web applications. Proficient in HTML, CSS, JavaScript, ReactJS, MySQL,
                                and frameworks like WordPress and Wix. Skilled in creating user-friendly sites, collaborating with teams, and delivering efficient, high-quality code.
                                Focused on staying updated with the latest web technologies.

                            </p>
                            <p> I work seamlessly with designers and project managers to blend creativity with functionality.
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
                        <h1>60+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr />
                    <div className="about-achivement">
                        <h1>50+</h1>
                        <p>Happy Clients</p>
                    </div>

                </div>
            </div>


            {/* Portfolio Section*/}
            <div id='portfolio' className='mywork'>
                <div className="mywork-title">
                    <h1>My Latest Work</h1>
                    <img src="" alt="" />
                </div>
                <div className="mywork-container">
                    <div className="work">
                        <img src={Itorix} alt="" />
                        <div className="work-title">
                            <h3>Itorix Infotech</h3>
                            <Link to="https://www.itorixinfotech.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={oprive} alt="" />
                        <div className="work-title">
                            <h3>Oprive Realtors</h3>
                            <Link to="https://opriverealtors.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={set} alt="" />
                        <div className="work-title">
                            <h3>Set By Pune Dusk</h3>
                            <Link to="https://www.setsbypunedusk.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={heramb} alt="" />
                        <div className="work-title">
                            <h3>Heramb Developer</h3>
                            <Link to="https://herambdevelopers.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={vision} alt="" />
                        <div className="work-title">
                            <h3>Vision Holidays</h3>
                            <Link to="https://www.visionholidayss.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={allflow} alt="" />
                        <div className="work-title">
                            <h3>Allflow</h3>
                            <Link to="https://allflow.com.au/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={master} alt="" />
                        <div className="work-title">
                            <h3>800 Master Pergola</h3>
                            <Link to="https://www.800masterpergola.com/">view Website</Link>
                        </div>
                    </div>
                    <div className="work">
                        <img src={bharat} alt="" />
                        <div className="work-title">
                            <h3>Education Bharat</h3>
                            <Link to="https://www.educationbharat.com/">view Website</Link>
                        </div>
                    </div>
                </div>
                <Link to="/portfolio"><button className='show'>Show More</button></Link>
            </div>



            {/* Services Section*/}
            <div id='experiance' className='services'>
                <div className="services-title">
                    <h1>Experiance In</h1>
                    <img src="" alt="" />
                </div>
                <div className="services-container">
                    <div className="item">
                        <h2>01</h2>
                        <h3>Website Development</h3>
                        <p>Provide website development services focused on creating responsive,
                            visually engaging, and user-friendly sites. From custom design to front
                            and back-end development, my solutions include SEO, mobile optimization,
                            and e-commerce integration to elevate your brand’s online presence.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                    <div className="item">
                        <h2>02</h2>
                        <h3>React Website Development</h3>
                        <p>Specialize in React website development, delivering dynamic,
                            high-performance web applications tailored to your business needs.
                            My services include custom component development, responsive design,
                            seamless user experiences, and optimized performance to create fast,
                            interactive, and scalable websites.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                    <div className="item">
                        <h2>03</h2>
                        <h3>Wordpress Development</h3>
                        <p>I offer expert WordPress website development services, crafting custom,
                            responsive, and user-friendly websites. From theme customization to plugin
                            integration, I create optimized and scalable sites designed to elevate your
                            online presence and support your business goals effectively.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                    <div className="item">
                        <h2>04</h2>
                        <h3>Power BI Dashboard</h3>
                        <p>Provide Power BI dashboard services to transform your data into actionable
                            insights. With customized, interactive dashboards, I help you visualize key
                            metrics, streamline reporting, and drive informed decision-making for
                            enhanced business performance and strategic growth.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                    <div className="item">
                        <h2>05</h2>
                        <h3>Website Maintenance</h3>
                        <p>Offer comprehensive website maintenance services to keep your site secure, updated,
                            and running smoothly. From regular backups and security checks to performance optimization
                            and content updates, I ensure your website remains functional and up-to-date,
                            supporting your business effectively.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                    <div className="item">
                        <h2>06</h2>
                        <h3>Website Speed Optimization</h3>
                        <p>I provide website speed optimization services to enhance loading times and improve
                            user experience. My service includes image compression, code minification,
                            cache setup, and server performance tuning, ensuring your website runs
                            efficiently and ranks higher in search results.
                        </p>
                        <Link to="/contact"><button className='btn'>Get Into Touch</button></Link>
                    </div>
                </div>
            </div>


        </div>


    )


}



export default home
