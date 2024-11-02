import React from 'react'
import './Footer.css'
import insta from '../../assets/insta.webp'
import face from '../../assets/face.webp'
import link from '../../assets/link.webp'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="" alt="" />
                    <p>Let’s elevate your online presence together!
                        Contact us today to get started.
                    </p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-social">
                        <h4>Follow On Social Media</h4>
                        <a href="https://www.instagram.com/ipavanchavan/#"><img src={insta} alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100072696725176&mibextid=JRoKGi"><img src={face} alt="" /></a>
                        <a href="https://www.linkedin.com/in/pavanchavan2001/"><img src={link} alt="" /></a>

                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-lelt">
                    All Right Reserved
                </p>
                <div className="footer-bottom-right">
                    <p><a href="#contact">Connect With Me</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
