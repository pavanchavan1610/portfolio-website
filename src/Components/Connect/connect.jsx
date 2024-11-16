import React, { useEffect } from 'react';
import './connect.css';
import Mail from '../../assets/mail.webp';
import Call from '../../assets/call.webp';
import Map from '../../assets/map.webp';
import { Link } from 'react-router-dom';

const Connect = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2612a3e6-f2f1-4446-a4ff-d6bacc29c456");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div>
            {/* Contact Us Section */}
            <div className='contact' id='contact'>
                <div className="contact-title">
                    <h1>Get Into Touch</h1>
                    <img src="" alt="" />
                </div>
                <div className="contact-container">
                    <div className="contact-left">
                        <h1>Let's Talk</h1>
                        <p>Need help with Website development, maintenance or speed optimization?
                            I’m here to keep your site secure, updated, and performing
                            at its best. Let’s discuss how I can support your online
                            goals—reach out today!
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={Mail} alt="" />
                                <p><Link to="mailto:pavan.chavan1016@gmail.com">pavan.chavan1016@gmail.com</Link></p>
                            </div>
                            <div className="contact-detail">
                                <img src={Call} alt="" />
                                <p><Link to="tel:+91 9545 647079">+91 9545 647079</Link></p>
                            </div>
                            <div className="contact-detail">
                                <img src={Map} alt="" />
                                <p><Link to="">Pune, Maharashtra 411052.</Link></p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' name='name' required autoFocus />

                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter Your Email' name='email' required autoFocus />

                        <label htmlFor="">Your Phone No</label>
                        <input type="tel" placeholder='Enter Your Phone No' name='phone' required autoFocus />

                        <label htmlFor="">Write Your Message</label>
                        <textarea name="message" rows='3' placeholder='Enter Your Message' autoFocus></textarea>

                        <button type='submit' className="contact-submit">Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connect;
