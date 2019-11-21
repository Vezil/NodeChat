import React from 'react';

import './UsersOnline.css';

const UsersOnline = ({ users }) => (

<div className="test">{ Object.keys(users).map(user => <div>{ users[user].name }</div> )  }</div> 

)

export default UsersOnline;

// users.map((user, i) => <div key={i}>{console.log(user)}</div>)