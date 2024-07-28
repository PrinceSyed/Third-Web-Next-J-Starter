import React from 'react'
interface User { 
  id: number;
  name: string;
  email: string;

}

export const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[] = await res.json();

  return (  
    <>
      <h1>Users</h1>
      <ul>
        {users.map(users => <li key={users.id}>{users.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage