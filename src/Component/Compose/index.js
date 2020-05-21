import React,{useState,useEffect} from 'react';
import './Compose.css';
import '../ToolbarButton';
import Picker, { SKIN_TONE_MEDIUM_DARK }  from 'emoji-picker-react';

const Compose=({ message,setMessage,sendMessage,leftItems,rightItems })=> {
    return (
      <div className="compose">
        {
          leftItems
        }
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message...."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />

        {
          rightItems
        }
     
      </div>
    );
}
export default  Compose;