import React, { useEffect, useState } from 'react';

function UserForm({ onSave, editingUser }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="form-control" required />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary w-100">
            {editingUser ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
