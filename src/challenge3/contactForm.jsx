import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../challenge1/contact.class';

const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact);
    }

    return (
        <form onSubmit={addContact}>
            <input 
                ref={nameRef}
                id='inputName'
                type='text'
                placeholder='Contact name'
                required
                autoFocus    
            />
            <input 
                ref={lastnameRef}
                id='inputLastname'
                type='text'
                placeholder='Contact lastname'
                required   
            />
            <input 
                ref={emailRef}
                id='inputEmail'
                type='text'
                placeholder='Contact email'
                required   
            />

            <button type='submit'>Add</button>
        </form>
    );
}


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
