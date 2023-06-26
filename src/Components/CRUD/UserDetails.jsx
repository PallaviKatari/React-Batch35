import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";

const UserTable = (props) => (
  <table className="table table-striped ">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.status}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button btn btn-primary">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button btn btn-danger ms-3">
                <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
