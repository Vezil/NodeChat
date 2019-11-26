import React from 'react';
import './Input.css';
import '../../../node_modules/emojionearea/dist/emojionearea.min.js';
import '../../../node_modules/emojionearea/dist/emojionearea.min.css';
import $ from 'jquery';



const Input = ( { message, setMessage, sendMessage} ) => (


    <form className="form">

        
        <input className="inputE"type="text" /><input className="input" type="text" placeholder="Type a message..." value = { message } onChange={ (event) => setMessage(event.target.value) } 
        onKeyPress={ event => event.key === 'Enter' ? sendMessage(event) : null }/>
            
        
        <button className="sendButton" onClick={(event) => sendMessage(event) }>Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        
    </form>
)

//nowy element i sklejac wiadomosci? wiadomosci - globalne
$(document).ready(function () {
    window.$(".inputE").emojioneArea({
        pickerPosition: "right",
        tonesStyle: "bullet",
        events: {
            keyup: function (editor, event) {
                 // console.log(editor.html())
                 // console.log(event.target)
                  
                  
           }
       }
    })
    
}
)



export default Input;