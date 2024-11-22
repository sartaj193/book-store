/*mport { useEffect,useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
const ListItems = () => {
const [list,setList] = useState([])
const fetchList = async(req,res)=>{
  try{
const response = await axios.get("http://localhost:3001/api/product/list")

if(response.data.success){
setList(response.data.products)
}else{
  toast.error(response.data.message)
}
  }catch(error){
console.log(error)
toast.error(error.message)
  }
}
useEffect(()=>{
fetchList()
},[])
  return (
    <>
    <p className="mb-3">All Products</p>
    <div>
    <div class="d-flex justify-content-between align-items-center">
  <b class="flex-grow-1 text-center">Image</b>
  <b class="flex-grow-1 text-center">Name</b>
  <b class="flex-grow-1 text-center">Price</b>
  <b class="flex-grow-1 text-center">Action</b>

<b></b>
<b></b>
   </div>*/

   
   
    /*</div>
    </>
  )
}

export default ListItems*/


/*import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListItems.css'; // Assuming custom CSS

const ListItems = () => {
  const [list, setList] = useState([]);

  // Fetch product list from the API
  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Products</h2>
      
      {list.length > 0 ? (
        list.map((item) => (
          <div className="product-card mb-5" key={item._id}>
            
            <div className="row">
              <div className="col-md-4">
               
                {item.images && item.images.length > 0 ? (
                  item.images.map((image, index) => (
                    <div key={index} className="mb-3">
                      <img
                        src={`http://localhost:3001${image}`}
                        alt={`Product ${index + 1}`}
                        className="product-image"
                      />
                    </div>
                  ))
                ) : (
                  <div className="no-image-placeholder">No Image Available</div>
                )}
              </div>

             
              <div className="col-md-8">
                <div className="product-details">
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Price:</strong> ₹{item.price}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
};

export default ListItems;*/





/*import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListItems.css'; // Assuming you create this CSS for custom styles

const ListItems = () => {
  const [list, setList] = useState([]);

  // Fetch product list from the API
  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Products</h2>

      
      <div className="row table-header">
        <div className="col-md-2"><b>Image</b></div>
        <div className="col-md-2"><b>Name</b></div>
        <div className="col-md-3"><b>Description</b></div> 
        <div className="col-md-2"><b>Orders</b></div>
        <div className="col-md-2"><b>Price</b></div>
        <div className="col-md-1"><b>Action</b></div>
      </div>

     
      {list.length > 0 ? (
        list.map((item) => (
          <div key={item._id} className="row product-row mb-3">
            <div className="col-md-2">
          
              {item.images && item.images.length > 0 ? (
                item.images.map((image, index) => (
                  <div key={index} className="mb-2">
                    <img
                      src={`http://localhost:3001${image}`}
                      alt={`Product ${index + 1}`}
                      className="product-image"
                    />
                  </div>
                ))
              ) : (
                <div className="no-image-placeholder">No Image Available</div>
              )}
            </div>

     
            <div className="col-md-2 d-flex align-items-center">
              <p>{item.name}</p>
            </div>

           
            <div className="col-md-3 d-flex align-items-center">
              <p>{item.description || "No Description Available"}</p> 
            </div>

    
            <div className="col-md-2 d-flex align-items-center">
              <p>{item.orders || "No Orders"}</p>
            </div>

        
            <div className="col-md-2 d-flex align-items-center">
              <p>₹{item.price}</p>
            </div>

    
            <div className="col-md-1 d-flex align-items-center">
              <button className="btn btn-danger">X</button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No products available.</p>
      )}
    </div>
  );
};

export default ListItems;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("science"); // Default section

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
    try {
      // Use full URL with localhost
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      
      console.log("API Response:", response.data); // Log the full response

      if (response.data && response.data.length > 0) {
        // If products are in the root of the response, directly use response.data
        const filteredProducts = response.data.filter(product => 
          product.section.includes(section)
        );
        console.log("Filtered Products:", filteredProducts); // Log filtered products

        setProducts(filteredProducts); // Store filtered products in state
      } else {
        console.error("No products found or invalid response structure.");
        setProducts([]); // Clear products if no valid data is found
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]); // Clear products in case of network or server error
    }
  };

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  // Log the products state to check after updates
  useEffect(() => {
    console.log("Products State:", products);
  }, [products]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>

      <div className="text-center mb-4">
        <button
          onClick={() => setSelectedSection("science")}
          className="btn btn-primary mx-2"
        >
          Science
        </button>
        <button
          onClick={() => setSelectedSection("history")}
          className="btn btn-primary mx-2"
        >
          History
        </button>
        <button
          onClick={() => setSelectedSection("fiction")}
          className="btn btn-primary mx-2"
        >
          Fiction
        </button>
        <button
          onClick={() => setSelectedSection("non-fiction")}
          className="btn btn-primary mx-2"
        >
          Non-Fiction
        </button>
      </div>

 
      {products.length > 0 ? (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={product.images[0]} // Assuming the first image is used for display
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <p className="card-text">Orders: {product.orders}</p>
                  <a href="#" className="btn btn-danger">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found for this section.</p>
      )}
    </div>
  );
};

export default ListItems;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("science"); // Default section
  const [editingProduct, setEditingProduct] = useState(null); // Track product being edited
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    author: "",
    price: "",
    section: "",
    image: "",
  });

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
    console.log("API Response:", response.data);

    if (response.data && response.data.length > 0) {
      const filteredProducts = response.data.filter(product => 
        product.section.includes(section)
      );
      console.log("Filtered Products:", filteredProducts);

      setProducts(filteredProducts);
    } else {
      console.error("No products found or invalid response structure.");
      setProducts([]);
    }
  } catch (error) {
    console.error(`Error fetching products for section ${section}:`, error);
    setProducts([]); // Optionally clear the products on error
  }
};

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle Edit button click
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({
      name: product.name,
      author: product.author,
      price: product.price,
      section: product.section,
      image: product.images[0],
    });
  };

  // Handle Save changes
  const handleSaveChanges = async () => {
    try {
      const updatedData = {
        ...editingProduct,
        ...updatedProduct,
      };
      // Update the product on the backend (using a PUT request)
      await axios.put(`http://localhost:3001/api/product/${editingProduct._id}`, updatedData);
      // Update the local state with the new product data
      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id ? updatedData : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>


      <div className="text-center mb-4">
        <button onClick={() => setSelectedSection("science")} className="btn btn-primary mx-2">
          Science
        </button>
        <button onClick={() => setSelectedSection("history")} className="btn btn-primary mx-2">
          History
        </button>
        <button onClick={() => setSelectedSection("fiction")} className="btn btn-primary mx-2">
          Fiction
        </button>
        <button onClick={() => setSelectedSection("non-fiction")} className="btn btn-primary mx-2">
          Non-Fiction
        </button>
      </div>

     
      {products.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.images[0]} alt={product.name} style={{ width: "50px", height: "auto" }} />
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="name"
                        value={updatedProduct.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="author"
                        value={updatedProduct.author}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.author
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="number"
                        name="price"
                        value={updatedProduct.price}
                        onChange={handleInputChange}
                      />
                    ) : (
                      `₹${product.price}`
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <button className="btn btn-success" onClick={handleSaveChanges}>
                        Save
                      </button>
                    ) : (
                      <button className="btn btn-warning" onClick={() => handleEditClick(product)}>
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No products found for this section.</p>
      )}
    </div>
  );
};

export default ListItems;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("science"); // Default section
  const [editingProduct, setEditingProduct] = useState(null); // Track product being edited
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    author: "",
    price: "",
    section: "",
    image: "",
  });

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      console.log("API Response:", response.data);

      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter((product) =>
          product.section.includes(section)
        );
        console.log("Filtered Products:", filteredProducts);

        setProducts(filteredProducts);
      } else {
        console.error("No products found or invalid response structure.");
        setProducts([]);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setProducts([]); // Optionally clear the products on error
    }
  };

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle Edit button click
  const handleEditClick = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({
      name: product.name,
      author: product.author,
      price: product.price,
      section: product.section,
      image: product.images[0],
    });
  };

  // Handle Save changes
  const handleSaveChanges = async () => {
    try {
      const updatedData = {
        ...editingProduct,
        ...updatedProduct,
      };
      // Update the product on the backend (using a PUT request)
      await axios.put(`http://localhost:3001/api/product/${editingProduct._id}`, updatedData);
      // Update the local state with the new product data
      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id ? updatedData : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle Delete button click
  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/product/${productId}`);
      const filteredProducts = products.filter((product) => product._id !== productId);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>

   <div className="text-center mb-4">
        <button onClick={() => setSelectedSection("science")} className="btn btn-primary mx-2">
          Science
        </button>
        <button onClick={() => setSelectedSection("history")} className="btn btn-primary mx-2">
          History
        </button>
        <button onClick={() => setSelectedSection("fiction")} className="btn btn-primary mx-2">
          Fiction
        </button>
        <button onClick={() => setSelectedSection("non-fiction")} className="btn btn-primary mx-2">
          Non-Fiction
        </button>
      </div>

    
      {products.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.images[0]} alt={product.name} style={{ width: "50px", height: "auto" }} />
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="name"
                        value={updatedProduct.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="author"
                        value={updatedProduct.author}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.author
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="number"
                        name="price"
                        value={updatedProduct.price}
                        onChange={handleInputChange}
                      />
                    ) : (
                      `₹${product.price}`
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <button className="btn btn-success" onClick={handleSaveChanges}>
                        Save
                      </button>
                    ) : (
                      <>
                        <button className="btn btn-warning mx-1" onClick={() => handleEditClick(product)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => handleDeleteClick(product._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No products found for this section.</p>
      )}
    </div>
  );
};

export default ListItems;*/
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("science"); // Default section
  const [editingProduct, setEditingProduct] = useState(null); // Track product being edited
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    author: "",
    price: "",
    section: "",
    images: [],
  });
  const [files, setFiles] = useState([]); // To store new image files selected by the user

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter((product) =>
          product.section.includes(section)
        );
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setProducts([]); // Optionally clear the products on error
    }
  };

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image file changes
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  };

  // Handle Edit button click
  const handleEditClick = (product) => {
    setEditingProduct(product);

    // Ensure product.section is an array
    const sections = Array.isArray(product.section)
      ? product.section
      : product.section
      ? [product.section]
      : []; // Convert string to array or default to an empty array

    setUpdatedProduct({
      name: product.name,
      author: product.author,
      price: product.price,
      section: sections.join(", "), // Join the array into a string
      images: product.images, // Set current images
    });

    setFiles([]); // Clear previous selected images
  };

  // Handle Save changes
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("author", updatedProduct.author);
      formData.append("price", updatedProduct.price);
      formData.append("section", updatedProduct.section);

      // Append images if new files are selected
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      // Send the PUT request to update the product
      await axios.put(
        `http://localhost:3001/api/product/${editingProduct._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Update the local state with the new product data
      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id ? { ...editingProduct, ...updatedProduct } : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      setFiles([]); // Clear file input after saving
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle Delete button click
  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/product/${productId}`);
      const filteredProducts = products.filter((product) => product._id !== productId);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>


      <div className="text-center mb-4">
        <button onClick={() => setSelectedSection("science")} className="btn btn-primary mx-2">
          Science
        </button>
        <button onClick={() => setSelectedSection("history")} className="btn btn-primary mx-2">
          History
        </button>
        <button onClick={() => setSelectedSection("fiction")} className="btn btn-primary mx-2">
          Fiction
        </button>
        <button onClick={() => setSelectedSection("non-fiction")} className="btn btn-primary mx-2">
          Non-Fiction
        </button>
      </div>


      {products.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.images[0]} alt={product.name} style={{ width: "50px", height: "auto" }} />
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="name"
                        value={updatedProduct.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="author"
                        value={updatedProduct.author}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.author
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="number"
                        name="price"
                        value={updatedProduct.price}
                        onChange={handleInputChange}
                      />
                    ) : (
                      `₹${product.price}`
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <button className="btn btn-success" onClick={handleSaveChanges}>
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-warning mx-1" onClick={() => handleEditClick(product)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => handleDeleteClick(product._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No products found for this section.</p>
      )}
    </div>
  );
};

export default ListItems;*/
import React, { useState, useEffect } from "react";
import axios from "axios";

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("popular in punjab"); // Default section
  const [editingProduct, setEditingProduct] = useState(null); // Track product being edited
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    author: "",
    price: "",
    section: "",
    images: [],
  });
  const [files, setFiles] = useState([]); // To store new image files selected by the user

  // Fetch products based on the selected section
  const fetchProductsBySection = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/product/section/${section}`);
      if (response.data && response.data.length > 0) {
        const filteredProducts = response.data.filter((product) =>
          product.section.includes(section)
        );
        setProducts(filteredProducts);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error(`Error fetching products for section ${section}:`, error);
      setProducts([]); // Optionally clear the products on error
    }
  };

  // Fetch products when the component mounts or when section changes
  useEffect(() => {
    fetchProductsBySection(selectedSection);
  }, [selectedSection]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image file changes
  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
  };

  // Handle Edit button click
  const handleEditClick = (product) => {
    setEditingProduct(product);

    // Ensure product.section is an array
    const sections = Array.isArray(product.section)
      ? product.section
      : product.section
      ? [product.section]
      : []; // Convert string to array or default to an empty array

    setUpdatedProduct({
      name: product.name,
      author: product.author,
      price: product.price,
      section: sections.join(", "), // Join the array into a string
      images: product.images, // Set current images
    });

    setFiles([]); // Clear previous selected images
  };

  // Handle Save changes
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("author", updatedProduct.author);
      formData.append("price", updatedProduct.price);
      formData.append("section", updatedProduct.section);

      // Append images if new files are selected
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }
      } else {
        // If no new images are selected, keep the existing images
        updatedProduct.images.forEach((image) => {
          formData.append("images", image); // Keep old images if no new ones
        });
      }

      // Send the PUT request to update the product
      await axios.put(
        `http://localhost:3001/api/product/${editingProduct._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Update the local state with the new product data
      const updatedProducts = products.map((product) =>
        product._id === editingProduct._id ? { ...editingProduct, ...updatedProduct, images: files.length > 0 ? [...files] : updatedProduct.images } : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      setFiles([]); // Clear file input after saving
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle Delete button click
  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/product/${productId}`);
      const filteredProducts = products.filter((product) => product._id !== productId);
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products in {selectedSection} Section</h2>

    
      
      <div className="text-center mb-4">
        <button onClick={() => setSelectedSection("popular in punjab")} className="btn btn-primary mx-2">
       popular in punjab
        </button>
        <button onClick={() => setSelectedSection("punjabi literature")} className="btn btn-primary mx-2">
punjabi literature
        </button>
        <button onClick={() => setSelectedSection("punjabi culture")} className="btn btn-primary mx-2">
      punjabi culture
        </button>
        <button onClick={() => setSelectedSection("best sellers")} className="btn btn-primary mx-2">
  best sellers
        </button>
       
      </div>

     
      {products.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img src={product.images[0]} alt={product.name} style={{ width: "50px", height: "auto" }} />
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="name"
                        value={updatedProduct.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="text"
                        name="author"
                        value={updatedProduct.author}
                        onChange={handleInputChange}
                      />
                    ) : (
                      product.author
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <input
                        type="number"
                        name="price"
                        value={updatedProduct.price}
                        onChange={handleInputChange}
                      />
                    ) : (
                      `₹${product.price}`
                    )}
                  </td>
                  <td>
                    {editingProduct && editingProduct._id === product._id ? (
                      <>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <button className="btn btn-success" onClick={handleSaveChanges}>
                          Save
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-warning mx-1" onClick={() => handleEditClick(product)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-1"
                          onClick={() => handleDeleteClick(product._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No products found for this section.</p>
      )}
    </div>
  );
};

export default ListItems;
