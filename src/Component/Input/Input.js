import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
  </div>
)

export default Input;