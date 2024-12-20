import React from 'react'
import Footer from '../components/Footer'
import './Page.css'

const ContactInfo = () => {
  return (
    <>
    <div className='everstyle-main' style={{ padding: '70px' }}>
      <center>
      <p className='head'>CONTACT INFO</p>
      <p>
      We’re here to assist you with any questions or concerns.
      </p>
      </center>
      <br/>
    <h3>Email:</h3>
    <p>For inquiries and support, email us at: support@everstyle.com </p>

    <h3>Phone:</h3>
    <p>Call us at: +1-800-123-4567
    Available: Monday to Friday, 9:00 AM - 6:00 PM</p>

    <h3>Office Address:</h3>
    <p>123 E-commerce St, Mumbai, India</p>

    <h3>Working Hours:</h3>
    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>

    <h3>Contact Form:</h3>
    <p>Have a question? Fill out the form below, and we’ll get back to you within 24 hours.</p>
    <br/>
    <center>
    <h3>Follow Us on Social Media:</h3>
    <p>
    Facebook | Instagram | Twitter
      </p>
      </center>
    </div>
    <Footer /> 
    </>
  )
}

export default ContactInfo
