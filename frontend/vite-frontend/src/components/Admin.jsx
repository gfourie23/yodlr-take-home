import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <h2 className="mb-4">Users</h2> 
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item">
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}

export default Admin;