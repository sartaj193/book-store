/*import React, { useState } from "react";
import axios from "axios";

const BooksOnDemandPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bookDetails: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, bookDetails, additionalNotes } = formData;

    if (!name || !phone || !bookDetails) {
      alert("Please fill in all required fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/bookdemand/bookdemand", {
        name,
        phone,
        email,
        bookdetails: bookDetails,
        additionalnotes: additionalNotes,
      });

      if (response.status === 200) {
        alert("Thank you for your request. We will contact you soon!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          bookDetails: "",
          additionalNotes: "",
        });
      }
    } catch (error) {
      console.error("Error submitting book request:", error);
      alert(
        error.response?.data?.message || "An error occurred. Please try again later."
      );
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Books on Demand</h1>
      <p style={styles.description}>
        Looking for a specific book in any language or need bulk orders? Contact us on{" "}
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappLink}
        >
          WhatsApp
        </a>{" "}
        or fill out the form below, and we’ll assist you.
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name<span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your full name"
        />

        <label style={styles.label}>
          Phone Number<span style={styles.required}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your phone number"
        />

        <label style={styles.label}>Email (Optional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
        />

        <label style={styles.label}>
          Book Details<span style={styles.required}>*</span>
        </label>
        <textarea
          name="bookDetails"
          value={formData.bookDetails}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Specify the book title, language, author, etc."
        />

        <label style={styles.label}>Additional Notes (Optional)</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Any additional details or requirements?"
        />

        <button type="submit" style={styles.submitButton}>
          Submit Request
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "30px",
  },
  whatsappLink: {
    color: "#25D366",
    textDecoration: "none",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "80px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  required: {
    color: "red",
  },
};

export default BooksOnDemandPage;*/



/*import React, { useState } from 'react';
import axios from 'axios';

const BookDemandForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookdetails: '',
    additionalnotes: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    // Check if all fields are filled
    if (Object.values(formData).some(field => field.trim() === '')) {
      setMessage('All fields are required');
      setIsError(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/bookdemand/bookdemand', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', bookdetails: '', additionalnotes: '' });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
      setIsError(true);
    }
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#2c5282',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #cbd5e0',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const messageStyle = {
    textAlign: 'center',
    marginTop: '15px',
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: isError ? '#fed7d7' : '#c6f6d5',
    color: isError ? '#9b2c2c' : '#2f855a',
  };

  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Request a Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="bookdetails"
          placeholder="Book Details"
          value={formData.bookdetails}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>
        <textarea
          name="additionalnotes"
          placeholder="Additional Notes"
          value={formData.additionalnotes}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>
        <button type="submit" style={buttonStyle}>Submit Request</button>
      </form>
      {message && <div style={messageStyle}>{message}</div>}
    </div>
  );
};

export default BookDemandForm;*/

/*import React, { useState, useRef } from "react";
import axios from "axios";

const BookDemandForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookdetails: "",
    additionalnotes: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRefs = useRef({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    // Check for empty fields
    const emptyField = Object.entries(formData).find(
      ([key, value]) => value.trim() === ""
    );

    if (emptyField) {
      const [fieldName] = emptyField;
      setMessage(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
      setIsError(true);
      inputRefs.current[fieldName]?.focus();
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/bookdemand/bookdemand",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        bookdetails: "",
        additionalnotes: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        "An error occurred while submitting the form.";
      if (error.response?.data?.error?.includes("duplicate key error")) {
        setMessage("Duplicate entry: This book demand already exists.");
      } else {
        setMessage(errorMsg);
      }
      setIsError(true);
    }
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#2c5282",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #cbd5e0",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4299e1",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const messageStyle = {
    textAlign: "center",
    marginTop: "15px",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: isError ? "#fed7d7" : "#c6f6d5",
    color: isError ? "#9b2c2c" : "#2f855a",
  };

  return (
    <div style={formStyle}>
      <h2 style={titleStyle}>Request a Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={(el) => (inputRefs.current.name = el)}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          ref={(el) => (inputRefs.current.email = el)}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          ref={(el) => (inputRefs.current.phone = el)}
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          ref={(el) => (inputRefs.current.bookdetails = el)}
          name="bookdetails"
          placeholder="Book Details"
          value={formData.bookdetails}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>
        <textarea
          ref={(el) => (inputRefs.current.additionalnotes = el)}
          name="additionalnotes"
          placeholder="Additional Notes"
          value={formData.additionalnotes}
          onChange={handleChange}
          style={textareaStyle}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Submit Request
        </button>
      </form>
      {message && <div style={messageStyle}>{message}</div>}
    </div>
  );
};

export default BookDemandForm;*/
import React, { useState, useRef } from "react"
import axios from "axios"

const BookDemandForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookdetails: "",
    additionalnotes: "",
  })
  const [message, setMessage] = useState("")
  const [isError, setIsError] = useState(false)
  const inputRefs = useRef({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setIsError(false)

    const emptyField = Object.entries(formData).find(([key, value]) => value.trim() === "")

    if (emptyField) {
      const [fieldName] = emptyField
      setMessage(`${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`)
      setIsError(true)
      inputRefs.current[fieldName]?.focus()
      return
    }

    try {
      const response = await axios.post("http://localhost:3001/api/bookdemand/bookdemand", formData)
      setMessage(response.data.message)
      setFormData({
        name: "",
        email: "",
        phone: "",
        bookdetails: "",
        additionalnotes: "",
      })
    } catch (error) {
      const errorMsg = error.response?.data?.message || "An error occurred while submitting the form."
      if (error.response?.data?.error?.includes("duplicate key error")) {
        setMessage("Duplicate entry: This book demand already exists.")
      } else {
        setMessage(errorMsg)
      }
      setIsError(true)
    }
  }

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    boxSizing: "border-box",
  }

  const formContainerStyle = {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  }

  const headingStyle = {
    color: "#4a5568",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "600",
  }

  const subHeadingStyle = {
    color: "#718096",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "border-color 0.3s ease",
  }

  const textareaStyle = {
    ...inputStyle,
    height: "120px",
    resize: "vertical",
  }

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4299e1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }

  const messageStyle = {
    textAlign: "center",
    marginTop: "20px",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: isError ? "#fed7d7" : "#c6f6d5",
    color: isError ? "#9b2c2c" : "#2f855a",
    fontSize: "16px",
  }

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headingStyle}>Request a Book</h1>
        <p style={subHeadingStyle}>
          For bulk orders or any special book not available on this website, please contact us on WhatsApp at
          +91 7986438681 or fill out this form. We'll try to respond within 1-2 days.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            ref={(el) => (inputRefs.current.name = el)}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            ref={(el) => (inputRefs.current.email = el)}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            ref={(el) => (inputRefs.current.phone = el)}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            ref={(el) => (inputRefs.current.bookdetails = el)}
            name="bookdetails"
            placeholder="Book Details"
            value={formData.bookdetails}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
          <textarea
            ref={(el) => (inputRefs.current.additionalnotes = el)}
            name="additionalnotes"
            placeholder="Additional Notes"
            value={formData.additionalnotes}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3182ce")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4299e1")}
          >
            Submit Request
          </button>
        </form>
        {message && <div style={messageStyle}>{message}</div>}
      </div>
    </div>
  )
}

export default BookDemandForm



/*import React, { useState } from "react";
import axios from "axios";

const BooksOnDemandPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookdetails: "",
    additionalnotes: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!formData.name || !formData.phone || !formData.bookdetails) {
      setMessage("Please fill in all required fields!");
      setIsError(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/bookdemand/bookdemand",
        formData
      );
      if (response.status === 200) {
        setMessage("Thank you for your request. We will contact you soon!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          bookdetails: "",
          additionalnotes: "",
        });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      setIsError(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Books on Demand</h1>
      <p style={styles.description}>
        Need a specific book or bulk order? Contact us on
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          WhatsApp
        </a>
        or fill out the form below.
      </p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name<span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your full name"
        />

        <label style={styles.label}>
          Phone<span style={styles.required}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your phone number"
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
        />

        <label style={styles.label}>
          Book Details<span style={styles.required}>*</span>
        </label>
        <textarea
          name="bookdetails"
          value={formData.bookdetails}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Specify the book title, language, author, etc."
        ></textarea>

        <label style={styles.label}>Additional Notes</label>
        <textarea
          name="additionalnotes"
          value={formData.additionalnotes}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Any additional details or requirements?"
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit Request
        </button>
      </form>

      {message && (
        <div
          style={{
            ...styles.message,
            backgroundColor: isError ? "#ffe6e6" : "#e6ffe6",
            color: isError ? "#cc0000" : "#006600",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  link: {
    color: "#25D366",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "80px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "center",
  },
  message: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  required: {
    color: "red",
    marginLeft: "5px",
  },
};

export default BooksOnDemandPage;*/

