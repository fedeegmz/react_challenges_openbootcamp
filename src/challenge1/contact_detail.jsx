import React from 'react';
import { Contact } from './contact.class';
import ContactComponent from './contact';
import PropTypes from 'prop-types';


const ContactDetail = ({ contact, remove, changeState }) => {
    return (
        <div>
            Name: { contact.name }
            Lastname: { contact.lastname }
            Email: { contact.email }
            <ContactComponent
                contact={ contact }
                changeState={changeState}
            >

            </ContactComponent>

            <button
                onClick={() => remove(contact)}
            >
                Remove
            </button>
        </div>
    );
};


ContactDetail.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    changeState: PropTypes.func.isRequired,
};


export default ContactDetail;
