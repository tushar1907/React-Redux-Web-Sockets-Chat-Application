import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';


const MessagesList = ({message, author}) => (
    <section id="message-list">
        <ul>
            {message.map(message => (
                <Message key={message.id}
                    {...message} />
            ))}
        </ul>

    </section>
)
    

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default MessagesList