import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to the backend
      const response = await fetch('http://localhost:8000/submitform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        
        setFormData({
          fullName: '',
          email: '',
          phoneNo: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact_header">
          <h1>Contact Us</h1>
          <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className="contact-content">
          <div className="pic_Area">
            <div className="back_Img">
              <img src="./images/my-pic.jpg" alt="" />
              <div className='backgroud-shadow'>im background</div>
              <div className="info">
                <div className="top_head_info">
                  <h2>Contact Information</h2>
                  <p>Fill up the form, and our Team will get back to you within 24 hours.</p>
                </div>
                <div className="contact-info">
                  <a href="tel:+919182502112" target="_blank" rel="noreferrer">
                    <div className="ChaildOfCon_info">
                      <i className="fa-solid fa-phone"></i>
                      <p>+91 9182502112</p>
                    </div>
                  </a>
                  <a href="mailto: moodramcharan@gmail.com" target="_blank" rel="noreferrer">
                    <div className="ChaildOfCon_info">
                      <i className="fa-solid fa-envelope"></i>
                      <p>moodramcharan@gmail.com</p>
                    </div>
                  </a>
                  <a href="##" target="_blank" rel="noreferrer">
                    <div className="ChaildOfCon_info">
                      <i className="fa-solid fa-location-dot"></i>
                      <p>kothagudem, (m.p.t)</p>
                    </div>
                  </a>
                </div>
                <div className="social_links">
                  <a href="##" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="##" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="##" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="##" target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="form_Area">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="fullName input_Div">
                  <label htmlFor="fname">Full Name</label>
                  <input type="text" name="fullName" placeholder='Enter Full Name' value={formData.fullName} onChange={handleChange} required/>
                </div>
                <div className="email input_Div">
                  <label htmlFor="lname">Email</label>
                  <input type="email" name="email" placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required/>
                </div>
              </div>
              <div className="row">
                <div className="phoneNo input_Div">
                  <label htmlFor="number">Number</label>
                  <input type="number" name="phoneNo" placeholder='Enter Mobile No.' value={formData.phoneNo} onChange={handleChange}  required/>
                </div>
                <div className="Subject input_Div">
                  <label htmlFor="lname">Subject</label>
                  <input type="text" name="subject" placeholder='Enter Queries Subject' value={formData.subject} onChange={handleChange} required/>
                </div>
              </div>
              <div className="row big_Input_Div">
                <label htmlFor="lname">Message</label>
                <input type="text" name="message" placeholder='Write your message' value={formData.message} onChange={handleChange} required />
              </div>
              <input type="submit" className='submit_Bth' value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
