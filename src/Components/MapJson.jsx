import React, { useState, useEffect } from "react";

function UserToggle() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://react-jsonserver-vercel.vercel.app/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
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
    <div style={{ marginLeft: 150, marginTop: 100 }}>
      <h2>User List - Toggle</h2>
      <div className="row">
        {users.map((user) => (
          <div
            className="col col-md-3"
            style={{ marginLeft: 50, marginTop: 50 }}>
            <p key={user.id} onClick={() => handleImageClick(user)}>
              <img
                src={user.imageUrl}
                alt={user.name}
                width={100}
                height={100}
              />
              {selectedUser && selectedUser.id === user.id && (
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              )}
            </p>
          </div>
        ))}
      </div>
      <hr />
      <UserFilter />
      <hr />
      <UserFilter1 />
      <hr />
      <UserSearch />
    </div>
  );
}

export default UserToggle;

//FILTER BY NAME
function UserFilter() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://react-jsonserver-vercel.vercel.app/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);

  return (
    <div>
      <h2>User List - Filter by Name</h2>
      <div className="row">
        {users
          .filter((user) => user.name.includes("D"))
          .map((user) => (
            <div
              className="col col-md-3"
              style={{ marginLeft: 50, marginTop: 50 }}>
              <p key={user.id}>
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

//FILTER AGE
function UserFilter1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://react-jsonserver-vercel.vercel.app/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);

  return (
    <div>
      <h2>User List - Filter by Age</h2>
      <div className="row">
        {users
          .filter((user) => user.age > 30)
          .map((user) => (
            <div
              className="col col-md-3"
              style={{ marginLeft: 50, marginTop: 50 }}>
              <p key={user.id}>
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

//USER SEARCH
function UserSearch() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://react-jsonserver-vercel.vercel.app/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);
  return (
    <div className="App">
      <b>SEARCH USER</b> <br />
      <br />
      <input
        className="text text-success btn btn-warning"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row" style={{ marginTop: 50 }}>
        {users
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="col col-md-3">
                <img
                  src={val.imageUrl}
                  alt={val.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{val.name}</h3>
                  <p>City: {val.city}</p>
                  <p>Age: {val.age}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
