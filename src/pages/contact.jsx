import '../components/contact.css';
import ContactForm from "../components/contactForm.jsx";

export function Contact() {
    return (
        <>
        <div>
            <h1 className='contact-center'>Contact</h1>
        </div>
        <div className='contact-center'>
            <h2>Address & Phone</h2>
            <p>
                PO Box 7144<br />
                Porter Ranch, CA 91327
            </p>
            <p><strong>Fax: </strong>747-202-1979</p>
        </div>

        <div className='contact-center'>
            <h2>Our Team</h2>
            <h3>Jay Chang</h3>
            <p><strong>Email: </strong>jayc@jaychangcpa.com</p>
            <p><strong>Phone: </strong> 818-851-8107</p>
        </div>
        <div className='contact-center'>
        <h3>Sue Kim</h3>
        <p><strong>Email: </strong>suek@jaychangcpa.com</p>
        <p><strong>Phone: </strong> 818-357-3942</p>
        </div>
        <div className='form-background'>
            <ContactForm />
        </div>

        </>
    );
}