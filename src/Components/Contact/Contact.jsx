import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SocialLink from './SocialLink';

function Contact() {

    /* Sending Email */
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ketcfsu', 'template_6r4yy9q', form.current, {
            publicKey: 'Vl_SIDDU6_xhXUPq4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


    return(
        <section id="ContactSection" className="contactPage">
          <SocialLink />
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="user_name" />
                    <input type="email" className="email" placeholder="Your Email" name="user_email" />
                    <textarea className="msg" rows="10" placeholder="Your Message" name="message"></textarea>
                    <button className="submitBtn" type="submit" value="Send" ><div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact