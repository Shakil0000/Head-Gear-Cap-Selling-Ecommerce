import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zi0l15z', 'template_suxf06r', form.current, '59jMZ5Djlbnrz6rpV')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send email.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Recipient Email</label>
      <input type="email" name="to_email" placeholder="Recipient's Email" required />
      <label>Your Name</label>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <label>Your Email</label>
      <input type="email" name="user_email" placeholder="Your Email" required />
      <label>Message</label>
      <textarea name="message" placeholder="Type your message here..." required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
