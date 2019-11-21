import React from 'react';

import './UsersOnline.css';
import onlineIcon from '../../icons/onlineIcon.png';

const UsersOnline = ({ users }) => 
(


<div className="UsersOnline"><h2>Users Online: </h2>{ 
users ? (
    
Object.keys(users).map(user => <div className="user"><img className="onlineUserIcon" src={ onlineIcon } alt="online img"/> { users[user].name }</div> )  


) : null
}</div> 

)

export default UsersOnline;

// users.map((user, i) => <div key={i}>{console.log(user)}</div>)