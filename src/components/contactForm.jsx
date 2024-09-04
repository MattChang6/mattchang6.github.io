import React from 'react';
import Swal from 'sweetalert2';
import './contactForm.css';

const ContactForm = () => {

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
                    <textarea name='message' id='' className='field message' placeholder='Enter your message' required />
               </div>
               <button type='submit'>Send</button>
            </form>
        </section>
    )
}

export default ContactForm