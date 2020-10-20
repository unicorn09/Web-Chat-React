import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div className="activecon">
            <h1 className="h1class">People currently online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" class="icononline" src={onlineIcon}/>{'     '+name}
                  </div>
                  <div></div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
