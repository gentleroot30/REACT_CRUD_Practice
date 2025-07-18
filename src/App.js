import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (user) => {
    const url = editingUser
      ? `http://localhost:5000/api/users/${editingUser.id}`
      : 'http://localhost:5000/api/users';

    const method = editingUser ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setEditingUser(null);
      fetchUsers();
    } else {
      toast.error(data.message);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      fetchUsers();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">React + Node CRUD App</h2>
      <UserForm onSave={handleSave} editingUser={editingUser} />
      <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      <ToastContainer />
    </div>
  );
}

export default App;
