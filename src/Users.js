import React from 'react';
import './Users.css';

function Users({ img, username}) {
  return (
      <div>
    <img className='users' src={img} alt='' />
    <p>{username}</p>
    </div>
  )
}

export default Users;