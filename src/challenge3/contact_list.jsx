import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Contact } from '../challenge1/contact.class';
import ContactDetail from '../challenge1/contact_detail';
import ContactForm from './contactForm';


const ContactList = () => {
    const contact1 = new Contact(
        "Wade",
        "Wilson",
        "wade@wilson.com",
        true
    )
    const contact2 = new Contact(
        "Anthony",
        "Stark",
        "tony@starkindustries.com",
        false
    )
    const contact3 = new Contact(
        "Bruce",
        "Banner",
        "brucebanner@hulk.com",
        true
    )

    const [contacts, setContact] = useState([contact1, contact2, contact3]);


    function addContact(contact) {
        console.log(`New contact: ${contact}`);
        // const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);

        setContact(tempContacts);
    }

    function removeContact(contact) {
        console.log(`Removed contact: ${contact}`);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);

        setContact(tempContacts);
    }

    function changeState(contact) {
        console.log(`Change state: ${contact}`);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].is_inline = !tempContacts[index].is_inline;

        setContact(tempContacts);
    }

    return (
        <div>
            {/* Contacts */}
            {
                contacts.map((contact, index) => {
                    return(
                        <ContactDetail
                            key={index}
                            contact={contact}
                            add={addContact}
                            remove={removeContact}
                            changeState={changeState}
                        >

                        </ContactDetail>
                    )
                })
            }

            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};


// ContactList.propTypes = {

// };


export default ContactList;