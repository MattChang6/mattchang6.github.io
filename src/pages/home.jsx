import '../components/home.css';
import ContactForm from "../components/contactForm.jsx";

export function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
    
    {/* BOX 1 */}
    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='beyond-balance-sheets lato-font'>Let's Make Your Business Shine, We'll Keep Your 
            Books in Line!</p>
          <p className='p-text roboto-mono-font' >We will work with your existing accounting system.  Or, 
            we'll get you set up with our cloud accounting system.</p>
        </div>
        <div className='item2'>
          <img src={require('../components/images/accounting-desk.jpg')} alt="placeholder" className='desk-img' />
        </div>
      </div>
    </div>

    {/* BOX 2 */}
    <div className='our-services-background'>
      <p className='our-services lato-font'>Our Services</p>
      <p className='expert-accounting lato-font'>Expert Accounting Support At<br/>Every Business Stage</p>
      <div className='grid-b2'>
        <div className='item1-b2'>
          <a href='#/services'>
            <img src={require('../components/images/book.jpg')} alt="placeholder" className='service-logo' /> 
          </a>
          <p className='service-subtitle roboto-mono-font'>Bookkeeping</p>
          <p className='service-description lato-font'>We offer bookkeeping 
            support so that your financial information is recorded correctly and you can relax 
            and focus on what is important to your business</p>
        </div>
        <div className='item1-b2'>
          <a href='#/services'>
            <img src={require('../components/images/1040.png')} alt="placeholder" className='service-logo' />
          </a>
          <p className='service-subtitle roboto-mono-font'>Tax Preparation</p>
          <p className='service-description lato-font'>Taxes are an inescapable fact of life, but they 
            don't have to be a headache.  JC+A can help you navigate existing tax requirements
             and prepare for future tax changes</p>
        </div>
        <div className='item1-b2'>
          <a href='#/services'>
            <img src={require('../components/images/handshake.jpg')} alt="placeholder" className='service-logo' />
          </a>
          <p className='service-subtitle roboto-mono-font'>Consulting</p>
          <p className='service-description lato-font'>We are your partners and trusted advisors who care 
            about your financial goals.  We can free up your time by taking on all the 
            daily, weekly, and yearly financial challenges of running a small business</p>
        </div>
      </div>
      <a type='button' className='learn-more-btn lato-font' href='#/services'>Learn More</a>
    </div>
    

    {/* BOX 3 */}

    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='business-accounting lato-font'>About Us</p>
          <p className='about-title lato-font'>Jay Chang & Associates is an outsourced accounting 
            firm tailored for small businesses.</p>
          <p className='p-text roboto-mono-font' >We take care of day-to-day operations, so you can focus on what is 
            important to your business.  Our experienced accountants will work with you to help grow 
            your business and keep your books in line.
          </p>
        </div>
        <div className='item2'>
          <img src={require('../components/images/business.jpg')} alt="placeholder" className='business-img-b2' />
        </div>
      </div>
    </div>

    {/* BOX 4 */}

    <div className='our-services-background'>
      <div className='background-container-b3 grid-b4'>
        <div className='item1-b1'>
          <p className='about-title lato-font'>Client Stories:<br />Real Experiences,<br />Real Results</p>
        </div>
        <div className='item2-b4'>
          <p className='service-subtitle lato-font'>s_son123</p>
          <p className='service-subtitle star'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className='service-description roboto-mono-font'>Jay is honestly the best accountant my family has ever 
            worked with... my family has been struggling to find a reliable accountant for years 
            and because my family's tax situation is complicated... He was not only willing to
            take on our "situation" but He was responsive, detailed, polite, honest, 
            understanding, and went above and beyond. I'm truly grateful and look forward 
            to working with him in the future. If you are looking for a sign this is your sign. </p>
        </div>
        <div className='item2-b4'>
          <p className='service-subtitle lato-font'>kthkm</p>
          <p className='service-subtitle star'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className='service-description roboto-mono-font'>Reached out last minute and he answered all my 
            questions and filed my tax return forms efficiently. He asked questions and was 
            thorough with the details. He explained the online process well. It was my first 
            time filing online but it was seamless with his help and expertise. Glad I filed 
            with him and am open to reaching out about financial advising and other inquiries
             based on this experience.</p>
        </div>
      </div>
    </div>

    {/* BOX 5 */}
    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='business-accounting lato-font'>Contact</p>
          <p className='about-title lato-font'>Let's Work Together</p>
          <p className='p-text roboto-mono-font'>Send a message to find out how we can help you and your business</p>
        </div>
        <div className='item2'>
          <ContactForm />
        </div>
      </div>
    </div>
      </>
    );
}
