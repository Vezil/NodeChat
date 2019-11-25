import React from 'react';

import './Input.css';

const Input = ( { message, setMessage, sendMessage } ) => (

        <form className="form">

            <input className="input" type="text" placeholder="Type a message..." value = { message } onChange={ (event) => setMessage(event.target.value) } 
            onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null }/>
            

            <button className="sendButton" onClick={(event) => sendMessage(event) }>Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
)

export default Input;