import React from 'react'; 
import Proptypes from 'prop-types';


const MessagesList = (message,author) => {
    <section id="message-list">
    <ul>
        {message.map(message=>(
            <Messages key={message.id}
            {...message}/>
        ))}
    </ul>

    </section>
}

MessagesList.PropTypes = {
    messages: Proptypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: ProtoTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default MessagesList