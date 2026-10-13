import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:9999/api/auth/add',
        form
      );

      navigate('/login');
    } catch (error) {
      console.log('Error registering user:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        style={{
          width: '400px',
          marginTop: '150px',
          padding: '20px',
          border: '1px solid black',
          borderRadius: '10px'
        }}
      >
        <h3 className="text-center mb-4">Signup Form</h3>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <br />

        <button type="submit" className="btn btn-danger form-control">
          Register
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account?{' '}
          <Link to="/login" className="text-primary text-decoration-none fw-bold">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;