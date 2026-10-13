
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    
  });

  // Fetch existing product
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/api/product/get/${id}`
        );

        const product = response.data.product;

        setForm({
          name: product.name,
          price: product.price,
          description: product.description,
          
        });
      } catch (error) {
        console.log('Error fetching product:', error);
        alert('Error fetching product');
      }
    };

    getProduct();
  }, [id]);

  // Handle text input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:9999/api/product/upd/${id}`,
        {
          name: form.name,
          price: form.price,
          description: form.description
        }
      );

      alert(response.data.message);
      navigate('/dashboard');
    } catch (error) {
      console.log('Error updating product:', error);
      alert(
        error.response?.data?.message || 'Error updating product'
      );
    }
  };

  return (
    <div>
      <Navbar />

      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          style={{
            width: '500px',
            marginTop: '50px',
            padding: '15px',
            border: '1px solid black',
            borderRadius: '10px'
          }}
        >
          <h3 className="text-center mb-4">Edit Product</h3>

          <input
            type="text"
            placeholder="Enter The Name"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter The Price"
            className="form-control"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="text"
            placeholder="Enter The Description"
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <br />

         
          <button
            type="submit"
            className="btn btn-success form-control"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
