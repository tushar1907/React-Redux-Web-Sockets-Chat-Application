import React from 'react';
import Proptypes from 'prop-types';


const AddMessage = (props) => {
    let input;

    return (
        <section id='new-message'>
        <input
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
                props.dipatch(input.value, 'Me')
                input.value = '';
            }
        }}
        text="text" 
        ref={(node)=>{
            input = node
        }}></input>
        </section>
         
    )
}

AddMessage.propTypes = {
    dispatch: Proptypes.func.isRequired
}

export default AddMessage