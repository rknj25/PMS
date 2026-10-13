import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      const response = await axios.post(
        'http://localhost:9999/api/auth/login',
        form
      );

      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert('Login Successfully');
      navigate('/dashboard');
    } catch (error) {
      console.log('Error in Login:', error);
      alert(error.response?.data?.message || 'Login failed. Please check your credentials.');
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
        <h3 className="text-center mb-4">Login Form</h3>

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

        <button type="submit" className="btn btn-success form-control">
          Login
        </button>

        <p className="text-center mt-3 mb-0">
          Not registered yet?{' '}
          <Link
            to="/"
            className="text-primary text-decoration-none fw-bold"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;