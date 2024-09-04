import '../components/home.css';
import ContactForm from "../components/contactForm.jsx";

export function Home() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    
    {/* BOX 1 */}
    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='business-accounting'>Business Accounting</p>
          <p className='beyond-balance-sheets'>Let's Make Your Business Shine, We'll Keep Your 
            Books in Line!</p>
          <p className='p-text' >We will work with your existing accounting system.  Or, 
            we'll get you set up with our own cloud accounting system.</p>
        </div>
        <div className='item2'>
          <img src={require('../components/images/beach.jpg')} alt="placeholder" className='beach-img' />
        </div>
      </div>
    </div>

    {/* BOX 2 */}
    <div className='our-services-background'>
      <p className='our-services'>Our Services</p>
      <p className='expert-accounting'>Expert Accounting Support At<br/>Every Business Stage</p>
      <div className='grid-b2'>
        <div className='item1-b2'>
          <img src={require('../components/images/book.png')} alt="placeholder" className='service-logo' />
          <p className='service-subtitle'>Tax Preparation</p>
          <p className='service-description'>Taxes are an inescapable fact of life, but they 
            don't have to be a headache.  JayC&A can help you navigate existing tax requirements
             and prepare for future tax changes.</p>
          <button type='button' className='learn-more-btn'>Learn More</button>
        </div>
        <div className='item1-b2'>
          <img src={require('../components/images/book.png')} alt="placeholder" className='service-logo' />
          <p className='service-subtitle'>Bookkeeping</p>
          <p className='service-description'>We offer bookkeeping 
            support so that your financial information is recorded correctly and you can relax 
            and focus on what is important to your business</p>
          <button type='button' className='learn-more-btn'>Learn More</button>
        </div>
        <div className='item1-b2'>
          <img src={require('../components/images/book.png')} alt="placeholder" className='service-logo' />
          <p className='service-subtitle'>Consulting</p>
          <p className='service-description'>We are your partners and trusted advisors who care 
            about you and your financial goals.  We can free up your time by taking on all the 
            daily, weekly, and yearly financial challenges of running a small business</p>
          <button type='button' className='learn-more-btn'>Learn More</button>
        </div>
      </div>
    </div>
    
    {/* BOX 3 */}

    <div className='background-container-b3'>
      <br /><br /><br />
    </div>

    {/* BOX 4 */}

    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='business-accounting'>About Us</p>
          <p className='about-title'>Jay Chang & Associates (JayC&A) is an outsourced accounting 
            firm tailored for small businesses.</p>
          <p className='p-text' >We take care of day-to-day operations, so you can focus on what is 
            important to your business.  Our experienced accountants will work with you to help grow 
            your business and keep your books in line.
          </p>
        </div>
        <div className='item2'>
          <img src={require('../components/images/beach.jpg')} alt="placeholder" className='beach-img-b2' />
        </div>
      </div>
    </div>

    {/* BOX 5 */}

    <div className='our-services-background'>
      <div className='background-container-b3 grid-b5'>
        <div className='item1-b1'>
          <p className='about-title'>Client Stories: Real Experiences, Real Results</p>
        </div>
        <div className='item2-b5'>
          <p className='service-subtitle'>s_son123<br/>*****</p>
          <p className='service-description'>Jay is honestly the best accountant my family has ever 
            worked with... my family has been struggling to find a reliable accountant for years 
            and because my family's tax situation is complicated... He was not only willing to
            take on our "situation" but He was responsive, detailed, polite, honest, 
            understanding, and went above and beyond. I'm truly grateful and look forward 
            to working with him in the future. If you are looking for a sign this is your sign. </p>
        </div>
        <div className='item2-b5'>
          <p className='service-subtitle'>kthkm<br />*****</p>
          <p className='service-description'>Reached out last minute and he answered all my 
            questions and filed my tax return forms efficiently. He asked questions and was 
            thorough with the details. He explained the online process well. It was my first 
            time filing online but it was seamless with his help and expertise. Glad I filed 
            with him and am open to reaching out about financial advising and other inquiries
             based on this experience.</p>
        </div>
      </div>
    </div>

    {/* BOX 6 */}
    <div className='background-container'>
      <div className='container grid-b1'>
        <div className='item1-b1'>
          <p className='business-accounting'>Let's Work Together</p>
          <p className='about-title'>Over 2 Clients Locally Trust Our Services</p>
        </div>
        <div className='item2'>
          <ContactForm />
        </div>
      </div>
    </div>
      </>
    );
}
