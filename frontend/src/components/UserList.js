import { useEffect, useState } from "react";
import userAPI from "../api/userAPI";
import { Table } from "react-bootstrap";
import "../App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    userAPI.getUsers().then((data) => {
      if (mounted) {
        setUsers(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
