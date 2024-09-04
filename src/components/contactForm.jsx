import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import './contactForm.css';

const ContactForm = () => {
    const [captchaVerified, setCaptchaVerified] = useState(false);
    
    const onSubmit = async (event) => {
        event.preventDefault();
        
        if (!captchaVerified) {
            Swal.fire({
                title: "CAPTCHA not verified!",
                text: "Please complete the CAPTCHA before submitting.",
                icon: "error"
            });
            return;
        }

        const formData = new FormData(event.target);
        formData.append("access_key", "2c837d43-8d0e-4e23-b3cc-9a613e63b083");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            
            const result = await res.json();

            if (result.success) {
                Swal.fire({
                    title: "Thank You!",
                    text: "We will reply within the next 48 hours.",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Submission Failed",
                    text: "There was an issue with your submission.",
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Submission Error",
                text: "There was a problem submitting the form.",
                icon: "error"
            });
        }
    };

    const handleCaptcha = (value) => {
        console.log("Captcha value:", value);  // Debugging: check if the captcha passes
        if (value) {
            setCaptchaVerified(true);  // Enable the submit button if CAPTCHA is verified
        }
    };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
               <h2>Contact Form</h2>
               <div className='input-box'>
                    <label>Full Name</label>
                    <input type='text' className='field' placeholder='Enter your name' name='name' required />
               </div>
               <div className='input-box'>
                    <label>Email Address</label>
                    <input type='email' className='field' placeholder='Enter your email' name='email' required />
               </div>
               <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name='message' className='field message' placeholder='Enter your message' required />
               </div>
               <ReCAPTCHA sitekey='6LcF0jYqAAAAALLwG0E3wHDZu1tel2n_FQ70d54X' onChange={handleCaptcha} />
               <button type='submit' disabled={!captchaVerified}>Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
