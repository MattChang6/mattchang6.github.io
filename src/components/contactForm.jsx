import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './contactForm.css';
import { phoneFormat } from './phone.js'; // Import the phone format function

const ContactForm = () => {
    const [phone, setPhone] = useState(""); // State to store phone input

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2c837d43-8d0e-4e23-b3cc-9a613e63b083");

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

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name*</label>
                    <input type='text' className='field' placeholder='Enter your name' name='name' required />
                </div>
                <div className='input-box'>
                    <label>Email Address*</label>
                    <input type='email' className='field' placeholder='Enter your email' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Phone Number*</label>
                    <input
                        type='tel'
                        className='field'
                        placeholder='(123) 456-7890'
                        name='phone'
                        value={phone} // Bind the formatted phone value to input
                        onChange={handlePhoneChange} // Call handlePhoneChange on input change
                        required
                    />
                </div>
                <div className='input-box'>
                    <label>Your Message*</label>
                    <textarea name='message' className='message' placeholder='Enter your message' required />
                    <p>* Required</p>
                </div>
                <button type='submit'>Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
