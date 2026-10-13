import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Dashboard.css';

const Dashboard = () => {
  const [pro, setPro] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://productmanagementsystemwithmulter.onrender.com/api/product/get'
      );
      setPro(response.data.allPro);
    } catch (error) {
      console.log('Error in fetching products:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://productmanagementsystemwithmulter.onrender.com/api/product/del/${id}`
      );

      alert(response.data.message);
      await getData();
    } catch (error) {
      alert(error.response?.data?.message || 'Error deleting product');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">
        <h2 className="dashboard-title">Product Management Dashboard</h2>

        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>

            <tbody>
              {pro.length > 0 ? (
                pro.map((item) => (
                  <tr key={item._id}>
                    <th className="product-name">{item.name}</th>
                    <td>₹{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                      <img
                        className="product-image"
                        src={`https://productmanagementsystemwithmulter.onrender.com/uploads/${item.image}`}
                        alt={item.name}
                      />
                    </td>
                    <td>
                      <Link
                        to={`/edit/${item._id}`}
                        className="edit-btn"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteItem(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty-message">
                    No products available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;