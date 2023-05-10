import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from './contact.class';


const ContactComponent = ({ contact, changeState }) => {
    // const [inline, setInline] = useState(is_inline);

    return (
        <div>
            { contact.is_inline ? "Online":"Disconnected" }
            <button
                onClick={ () => changeState(contact) }
            >
                { contact.is_inline ? "Disconnect":"Connect" }
            </button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    changeState: PropTypes.func.isRequired,
};


export default ContactComponent;