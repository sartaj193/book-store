import React, { useState } from 'react';
import axios from 'axios';
import { Server_URL } from '../utils/config';

const AddAuthor = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleAddCategory = async () => {
    try {
      if (!name || !image) {
        alert('Please fill in both fields.');
        return;
      }

      // Create a FormData object
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);

      // Make POST request with FormData
      const response = await axios.post(`${Server_URL}api/author/addAuthor`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Category added successfully!');
      setName('');
      setImage(null);
    } catch (error) {
      console.error('Error adding category:', error);
      setMessage('Failed to add category.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Author</h1>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.fileInput}
        />
        <button onClick={handleAddCategory} style={styles.button}>
          Add Category
        </button>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  fileInput: {
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    textAlign: 'center',
    marginTop: '10px',
    color: 'green',
  },
};

export default AddAuthor;
