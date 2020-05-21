  
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';

import logo from '../../logo-white.svg';
import './Chat.css';
import Compose from '../Compose/index';
import Toolbar from '../Toolbar/index';
import ToolbarButton from '../ToolbarButton/index';
let socket;
/*Harsh*/
const Chat = ({ location,props }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://unicorn-chat-app-reactjs.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    })
    return ()=>{
    socket.on('disconnect');
    
    }
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessage('');
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  return (
    <div class="mainpage">   
      <div class="chat-sidebar" >
        <div class="user-pic">
          <img class="img-responsive img-rounded" src={logo} alt=""/>
        </div>
      <div class="user-info">
  <span class="user-name"><strong>{name}</strong></span>
         
          <div class="user-status">
            <a href="#">
              <div class="greendot"></div>
              <span>Online</span></a>
          </div>
        </div>
        <div class="borderline"></div>
        <TextContainer users={users}/></div>
        <div className="chatcont">
        <Toolbar
          leftItems={room}
          rightItems={[
            <a href="/"><i className="toolbar-button ion-ios-close"/></a>
          ]}
        />

       <Messages messages={messages} name={name} />
      
      
       <Compose message={message} setMessage={setMessage} sendMessage={sendMessage} leftItems={[<ToolbarButton key="emoji" icon="ion-ios-happy"/>]} rightItems={[
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />
        ]}/>
      </div>
        </div>
 
  );
}

export default Chat;
