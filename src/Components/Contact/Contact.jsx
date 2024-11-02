import React from 'react'
import './Contact.css'
import call from '../../assets/call.webp'
import mail from '../../assets/mail.webp'
import map from '../../assets/map.webp'

const Contact = () => {

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
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get Into Touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-container">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Need help with website maintenance or speed optimization?
                        I’m here to keep your site secure, updated, and performing
                        at its best. Let’s discuss how I can support your online
                        goals—reach out today!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" />
                            <p><a href="mailto:pavan.chavan1016@gmail.com">pavan.chavan1016@gmail.com</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" />
                            <p><a href="tel:+91 9545 647079">+91 9545 647079</a></p>
                        </div>
                        <div className="contact-detail">
                            <img src={map} alt="" />
                            <p><a href="">Pune, Maharashatra 411052.</a></p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required autoFocus />

                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='emial' required autoFocus />

                    <label htmlFor="">Your Phone No</label>
                    <input type="email" placeholder='Enter Your Phone No' name='Phone' required autoFocus />

                    <label htmlFor="">Write Your Message</label>
                    <textarea name="message" id="" rows='3' placeholder='Enter Your Message' autoFocus></textarea>

                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
