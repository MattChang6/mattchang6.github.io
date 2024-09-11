import '../components/contact.css';
import ContactForm from "../components/contactForm.jsx";

export function Contact() {
    return (
        <>
        <div>
            <h1 className='contact-title lato-font'>Contact</h1>
        </div>
        <div className='form-background'>
            <ContactForm />
        </div>       

        <div className='contact-center lato-font'>
            <h2>Mailing Address & Phone</h2>
        </div>
        <div className='contact-center lato-font'>
            <p>
                PO Box 7144<br />
                Porter Ranch, CA 91327
            </p>
            <p><strong>Phone: </strong>818-851-8107</p>
            <p><strong>Fax: </strong>747-202-1979</p>
        </div>

        <h1 className='contact-center lato-font'><br />Our Team</h1>
        <div className='team lato-font'>
            <div>
                <img src={require('../components/images/jay chang2.jpg')} alt="placeholder" className='profile-img' />
                <h3 className='employee-name'>Jay Chang, CPA</h3>
                <h4 className='job-title'>Managing Director</h4>
                <p><strong>Email: </strong>jayc@jaychangcpa.com</p>
                <p><strong>Phone: </strong> 818-851-8107</p>
            </div>
            <div>
                <img src={require('../components/images/img_female.png')} alt="placeholder" className='profile-img' />
                <h3 className='employee-name'>Sue Kim</h3>
                <h4 className='job-title'>Senior Associate</h4>
                <p><strong>Email: </strong>suek@jaychangcpa.com</p>
                <p><strong>Phone: </strong> 818-357-3942</p>
            </div>
        </div><br />
        </>
    );
}