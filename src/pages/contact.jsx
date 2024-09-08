import '../components/contact.css';
import ContactForm from "../components/contactForm.jsx";

export function Contact() {
    return (
        <>
        <div>
            <h1 className='contact-center lato-font'>Contact</h1>
        </div>
        <div className='contact-center lato-font'>
            <h2>Mailing Address & Fax</h2>
        </div>
        <div className='contact-center roboto-mono-font'>
            <p>
                PO Box 7144<br />
                Porter Ranch, CA 91327
            </p>
            <p><strong>Phone: </strong>818-851-8107</p>
            <p><strong>Fax: </strong>747-202-1979</p>
        </div>

        <h1 className='contact-center lato-font'><br />Our Team</h1>
        <div className='team roboto-mono-font'>
            <div>
                <h3>Jay Chang</h3>
                <p><strong>Email: </strong>jayc@jaychangcpa.com</p>
                <p><strong>Phone: </strong> 818-851-8107</p>
            </div>
            <div>
                <h3>Sue Kim</h3>
                <p><strong>Email: </strong>suek@jaychangcpa.com</p>
                <p><strong>Phone: </strong> 818-357-3942</p>
            </div>
        </div><br />
        <div className='form-background'>
            <ContactForm />
        </div>

        </>
    );
}