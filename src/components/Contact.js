import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-form-container'>
            <h5 className="contact-title">Please feel free to leave a message!</h5>
            <form className='contact-form' action="https://formspree.io/nando.theessen@gmail.com"
                method="POST">
                <input placeholder='Name' className='form-element' type="text" id='name' name="name" />
                <input placeholder='E-Mail' className='form-element' type="email" id='mail' name="_replyto" />
                <textarea placeholder='Message' className='form-element' id='msg' type="text" name="message" />
                <input id='button' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;