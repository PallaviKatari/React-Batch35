import React, { useState,useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
    //   console.log(data)
  }, []);

  const handleImageClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleImageClick(user)}>
            <img src={user.imageUrl} alt={user.name} />
            {selectedUser && selectedUser.id === user.id && (
              <div>
                <h3>{user.name}</h3>
                <p>City: {user.city}</p>
                <p>Age: {user.age}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
