import './cssfiles/Home.css'
import emailjs from '@emailjs/browser';
import './cssfiles/Contact.css';
import React, { useRef, useState, useEffect } from 'react'; // Import useState




function Home() {
  const form = useRef();  // makes the form reactive

  /**
   * setButtonText: Sets the text of the button, contained as a string
   * isSending: State to disable the button while sending, contained as a boolean
   * messageStatus: State to show success or fail message after sending, contained as a string
   *                (shows null as no string set yet)
   */
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false); 
  const [messageStatus, setMessageStatus] = useState(null);

  // initialize the emailjs service
  useEffect(() => {
    emailjs.init('NKHVAqhW9gU2a16Ua'); // FIXME: NEED TO ADJUST WITH MY EMAILJS API KEY
  }, []);

  // function to send the email to emailjs service
  const sendEmail = (e) => {
    e.preventDefault();// Prevent default html form submission behavior, html default reloads entire page

    // disable button, show sending, and clear the previous message status
    setIsSending(true);
    setButtonText('Sending...');
    setMessageStatus(null);

    // send the form data to emailjs
    emailjs.sendForm('service_f0hirps', 'template_o5kw3t2', form.current)
      .then(

        // if successful, state successful, and reset the form
        () => {
          console.log('SUCCESS!');
          setButtonText('Message Sent!'); 
          setMessageStatus('success');
          form.current.reset();

          // Set a timeout to revert the button back
          setTimeout(() => {
            setButtonText('Send Message'); 
            setMessageStatus(null);
            setIsSending(false); 
          }, 4000); // 4 seconds delay
        },

        // if failed, state failure, and reset the button back
        (error) => {
          console.error('FAILED:', error);
          setButtonText('Message Failed!'); 
          setMessageStatus('fail');

          setTimeout(() => {
            setButtonText('Send Message');
            setMessageStatus(null);
            setIsSending(false);
          }, 4000); 
        }
      );
  };


  return (
    <>
      <section className='home-container'>
        <h1>Fernando Lopez</h1>
        <p>I am a Software Developer that currently specializes in Front-end. Back-end will be next.</p>  
      </section>
      <section className='about-container'>

      </section>
      <section className='project-container'>

      </section>
      <section className='experience-container'>
        
      </section>
      <section className='contact-container'>
        <div className="contact-page-container">
        <main className="contact-main-content">
          <div className="content-wrapper">
            <h1 className="section-heading">Contact Me</h1>

            <div className="contact-info-and-form">

              <div className="contact-form-wrapper">
                <p className="contact-intro-text">
                  If you'd like to get in touch about business inquiries, or just want to say hello, please fill out the form below! I look forward to hearing from you.
                </p>

                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="contactName">Your Name</label>
                    <input type="text" id="contactName" name="user_name" placeholder="Your Name" className="input-field" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactEmail">Your Email</label>
                    <input type="email" id="contactEmail" name="user_email" placeholder="Your Email" className="input-field" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactPhone">Phone Number (Optional)</label>
                    <input type="tel" id="contactPhone" name="user_phone" placeholder="Your Phone Number" className="input-field" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactSubject">Subject (Optional)</label>
                    <input type="text" id="contactSubject" name="user_subject" placeholder="Business Inquiry, Personal Inquiry, etc" className="input-field" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactMessage">Your Message</label>
                    <textarea id="contactMessage" name="user_message" rows="6" placeholder="Tell me about what you'd like to discuss." className="input-field"></textarea>
                  </div>

                  <button
                    type="submit"
                    // if successful, change the button to success, if failed, change the button to fail changing the css class, fancy lol
                    className={`submit-inquiry-button ${messageStatus === 'success' ? 'success' : ''} ${messageStatus === 'fail' ? 'fail' : ''}`}
                    disabled={isSending}
                  >
          
                    {buttonText}
                  </button>
                </form>
              </div>

              <div className="contact-details-wrapper">

                <p className="contact-intro-text">
                  Prefer a direct contact?
                </p>

                <div className="contact-details-grid">
                  <div className="detail-item">
                    <h3 className="detail-label">Email Me</h3>
                    <p className="detail-value"><a href="mailto:FernandoLpz0911.business@gmail.com" className="contact-link">FernandoLpz0911.business@gmail.com</a></p>
                  </div>

                  <div className="detail-item">
                    <h3 className="detail-label">Message Me</h3>
                    <p className="detail-value"><a href="tel:872-305-7616" className="contact-link">872-305-7616</a></p>
                  </div>

                  <div className="detail-item">
                    <span className="detail-icon"></span>
                    <h3 className="detail-label">Connect With Me</h3>

                    <div className='social-wrapper'>
                      <a href="https://www.linkedin.com/in/fernando-lopez-dev/" className="social-icon-link">
                        <img src="/InBug-White.png" alt="LinkedIn" className='social-icon'/>
                      </a>

                      <a href="https://github.com/FernandoLpz0911" className="social-icon-link">
                        <img src="/github-mark-white.png" alt="GitHub" className='social-icon'/>
                      </a>

                    </div>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      </section>

    </>
  )
}

export default Home
