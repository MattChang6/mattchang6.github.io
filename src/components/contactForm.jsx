import React, { useState } from 'react';
import Swal from 'sweetalert2';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './contactForm.css';
import { phoneFormat } from './phone.js'; // Import the phone format function

const ContactForm = () => {
    const [phone, setPhone] = useState(""); // State to store phone input
    const [captchaToken, setCaptchaToken] = useState("38600b22-07e0-4c12-86a0-033e8f620a20"); // State to store captcha token
    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // Track if captcha is verified

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!isCaptchaVerified) {
            Swal.fire({
                title: "Captcha Required",
                text: "Please complete the captcha verification.",
                icon: "warning"
            });
            return;
        }

        const formData = new FormData(event.target);

        formData.append("access_key", "2c837d43-8d0e-4e23-b3cc-9a613e63b083");
        formData.append("h-captcha-response", captchaToken);

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
            Swal.fire({
                title: "Thank You!",
                text: "We will reply within the next 48 hours.",
                icon: "success"
            });
        }
    };

    // Handle phone input change and format
    const handlePhoneChange = (e) => {
        const formattedPhone = phoneFormat(e.target.value); // Format the phone input
        setPhone(formattedPhone); // Update phone state
    };

    // Handle captcha success
    const handleCaptchaSuccess = (token) => {
        setCaptchaToken(token); // Store captcha token
        setIsCaptchaVerified(true); // Set captcha as verified
    };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2 className='lato-font'>Contact Form</h2>
                <div className='input-box roboto-mono-font'>
                    <label>First Name*</label>
                    <input type='text' className='field' placeholder='First Name' name='First Name' required />
                </div>
                <div className='input-box roboto-mono-font'>
                    <label>Last Name*</label>
                    <input type='text' className='field' placeholder='Last Name' name='Last Name' required />
                </div>
                <div className='input-box roboto-mono-font'>
                    <label>Email Address*</label>
                    <input type='email' className='field' placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box roboto-mono-font'>
                    <label>Phone Number*</label>
                    <input
                        type='tel'
                        className='field'
                        placeholder='(123) 456-7890'
                        name='phone'
                        value={phone}
                        onChange={handlePhoneChange} 
                        pattern='\([0-9]{3}\)[0-9]{3}-[0-9]{4}'
                        required
                    />
                </div>
                <div className='input-box roboto-mono-font'>
                    <label>Your Message*</label>
                    <textarea name='message' className='message' placeholder='Enter your message' required />
                    <p>* Required</p>
                </div>
                <HCaptcha
                    sitekey="2c837d43-8d0e-4e23-b3cc-9a613e63b083"
                    onVerify={handleCaptchaSuccess}
                />
                <button type='submit' className='roboto-mono-font' disabled={!isCaptchaVerified}>Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
