// src/app/components/UserList.tsx

import React from 'react';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const UserList = () => {
  let data;
  (async () => {
    data = await getData();
  })();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
