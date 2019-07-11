import React from 'react';
import usersData from '../usersData';

export default function User(props) {
  let selectedUser = usersData.find(u => u.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedUser.name}</h1>
      <p>{selectedUser.age}</p>
    </div>
  );
}
