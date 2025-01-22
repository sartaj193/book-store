import React, { useState } from 'react';
import axios from 'axios';

const AddProductDetail = () => {
  const [productData, setProductData] = useState({
    productId: '',
    name: '',
    author: '',
    description: '',
    mainImage: null, // For file upload
  });

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, mainImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productId', productData.productId);
    formData.append('name', productData.name);
    formData.append('author', productData.author);
    formData.append('description', productData.description);
    formData.append('mainImage', productData.mainImage);

    try {
      const response = await axios.post("http://localhost:3001/api/detail/add-detail", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(true);
      setMessage(response.data.message);
    } catch (error) {
      setSuccess(false);
      setMessage(error.response?.data?.message || 'Server Error');
    }
  };

  return (
    <div>
      <h1>Add Product Detail</h1>
      {message && (
        <p style={{ color: success ? 'green' : 'red' }}>{message}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            name="productId"
            value={productData.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={productData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Main Image:</label>
          <input
            type="file"
            name="mainImage"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductDetail;
