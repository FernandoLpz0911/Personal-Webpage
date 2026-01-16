
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef(null);
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false); 
  const [messageStatus, setMessageStatus] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setButtonText('Sending...');
    setMessageStatus(null);

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          setButtonText('Message Sent!'); 
          setMessageStatus('success');
          if (form.current) form.current.reset();

          setTimeout(() => {
            setButtonText('Send Message'); 
            setMessageStatus(null);
            setIsSending(false); 
          }, 4000);
        },
        (error) => {
          console.error('FAILED:', error);
          setButtonText('Message Failed'); 
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
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-line"></span>
          Contact Me
        </h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
             <div className="contact-info-prose">
                <p>
                  If you'd like to get in touch about business inquiries, or just want to say hello, please fill out the form! I look forward to hearing from you.
                </p>
             </div>

             <div className="contact-details">
                <div className="detail-item">
                  <div className="icon-box">
                    <svg className="icon-svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="detail-content">
                    <h3>Email Me</h3>
                    <a href="mailto:flope8@uic.edu" className="detail-link">
                      Flope8@uic.edu
                    </a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <svg className="icon-svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div className="detail-content">
                    <h3>Call Me</h3>
                    <a href="tel:872-305-7616" className="detail-link">
                      872-305-7616
                    </a>
                  </div>
                </div>

                <div className="detail-item">
                   <div className="icon-box">
                    <svg className="icon-svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                   </div>
                   <div className="detail-content">
                      <h3>Connect</h3>
                      <div className="social-links">
                        <a href="https://www.linkedin.com/in/fernando-lopez-dev/" className="social-link">LinkedIn</a>
                        <span style={{color: 'var(--color-border)'}}>|</span>
                        <a href="https://github.com/FernandoLpz0911" className="social-link">GitHub</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail} className="form-stack">
              <div className="form-group">
                <label htmlFor="contactName">Name</label>
                <input type="text" id="contactName" name="user_name" required placeholder="John Doe" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email</label>
                <input type="email" id="contactEmail" name="user_email" required placeholder="john@example.com" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" id="contactSubject" name="user_subject" placeholder="Project Inquiry" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea id="contactMessage" name="user_message" rows={4} required placeholder="How can I help you?" className="form-textarea"></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending}
                className={`submit-btn ${messageStatus === 'success' ? 'success' : messageStatus === 'fail' ? 'fail' : 'default'}`}
              >
                {isSending && <div className="spinner"></div>}
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
