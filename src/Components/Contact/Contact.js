import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <section className="contact-container pb-4 pt-4 bg-color">
        <Container>
          <h3 className="font-weight-bold textColor text-center mb-3">CONTACT Me</h3>
          <div className="pb-3">
              <input type="text" placeholder='Full Name' className="form-control form-control-lg mb-2"/>
              <input type="text" placeholder='Email'  className="form-control form-control-lg mb-2"/>
              <textarea placeholder='Text'  class="form-control form-control-lg mb-3" rows="5"></textarea>
              <button className="btn btn-lg btn-grad text-white font-weight-bold d-block text-center btnBg">SUBMIT</button>
          </div>
        </Container>
      </section>
    );
};

export default Contact;