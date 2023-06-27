import React from 'react';
import axios from 'axios';

const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>User List:</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/user');
  const users = response.data;

  return {
    props: {
      users,
    },
  };
}