import React from 'react';

function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr><td colSpan="5" className="text-center">No users found</td></tr>
        ) : (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.address}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(user)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
