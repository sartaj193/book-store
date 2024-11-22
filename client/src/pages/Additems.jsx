/*import { useState } from "react";
import uploadAreaImage from "../assets/upload_area.png"; // Default placeholder image
import axios from "axios"; // Axios for API calls
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import "./sidebar.css";

const AddItems = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bestSellers, setBestSellers] = useState(false); // For bestSellers checkbox
  const [imagePreviews, setImagePreviews] = useState([uploadAreaImage, uploadAreaImage, uploadAreaImage, uploadAreaImage]); // Four image preview placeholders
  const [selectedImages, setSelectedImages] = useState([null, null, null, null]); // Four slots for selected image files

  // Function to handle individual image upload for each slot
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedPreviews = [...imagePreviews];
      const updatedSelectedImages = [...selectedImages];

      // Update the specific image preview and file in the corresponding index
      updatedPreviews[index] = URL.createObjectURL(file);
      updatedSelectedImages[index] = file;

      setImagePreviews(updatedPreviews); // Update image previews state
      setSelectedImages(updatedSelectedImages); // Update selected images state
    }
  };

  // Submit handler to send data to the backend
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("bestSellers", bestSellers);

      // Append selected images to a single field
      selectedImages.forEach((image) => {
        if (image) {
          formData.append("images", image); // Append images to the "images" key
        }
      });

      // Make the API request to your backend
      await axios.post("http://localhost:3001/api/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success response and show a success toast
      toast.success("Product added successfully!");

      // Clear form fields upon successful submission
      setName("");
      setDescription("");
      setPrice("");
      setBestSellers(false);
      setImagePreviews([uploadAreaImage, uploadAreaImage, uploadAreaImage, uploadAreaImage]); // Reset image previews
      setSelectedImages([null, null, null, null]); // Clear the image files
    } catch (error) {
      // Handle error response and show an error toast
      toast.error("Error uploading product!");
      console.error("Error uploading product:", error);
    }
  };

  return (
    <>
      <ToastContainer /> 
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
        <div>
          <p className="mb-2">Upload Images (Max 4)</p>
          <div className="flex gap-2">
            
            {imagePreviews.map((preview, index) => (
              <label key={index} htmlFor={`imageUpload${index}`}>
                <img className="upload-image cursor-pointer" src={preview} alt={`Upload Preview ${index + 1}`} />
                <input
                  type="file"
                  id={`imageUpload${index}`}
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, index)} // Handle image upload per slot
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        <div className="mb-3 mt-3 p-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type here"
          />
        </div>

        <div className="mb-3 mt-4 p-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write down"
          />
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="inputPrice"
              className="form-control"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="form-check mt-4 p-4">
          <input
            onChange={() => setBestSellers((prev) => !prev)}
            checked={bestSellers}
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Add to BestSellers
          </label>
        </div>

        <div>
          <button className="btn btn-dark rounded-pill px-3 m-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItems;*/
/*import { useState } from "react";
import uploadAreaImage from "../assets/upload_area.png"; // Default placeholder image
import axios from "axios"; // Axios for API calls
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import "./sidebar.css";

const AddItems = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bestSellers, setBestSellers] = useState(false); // For bestSellers checkbox
  const [imagePreviews, setImagePreviews] = useState([uploadAreaImage, uploadAreaImage, uploadAreaImage, uploadAreaImage]); // Four image preview placeholders
  const [selectedImages, setSelectedImages] = useState([null, null, null, null]); // Four slots for selected image files
  const [sections, setSections] = useState(["", "", "", ""]); // Array to store the section for each image

  // Function to handle individual image upload for each slot
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedPreviews = [...imagePreviews];
      const updatedSelectedImages = [...selectedImages];

      // Update the specific image preview and file in the corresponding index
      updatedPreviews[index] = URL.createObjectURL(file);
      updatedSelectedImages[index] = file;

      setImagePreviews(updatedPreviews); // Update image previews state
      setSelectedImages(updatedSelectedImages); // Update selected images state
    }
  };

  // Function to handle section change for each image
  const handleSectionChange = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index] = e.target.value;
    setSections(updatedSections);
  };

  // Submit handler to send data to the backend
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("bestSellers", bestSellers);

      // Append selected images and their corresponding sections
      selectedImages.forEach((image, index) => {
        if (image) {
          formData.append("images", image); // Append image
          formData.append("sections", sections[index]); // Append corresponding section
        }
      });

      // Make the API request to your backend
      await axios.post("http://localhost:3001/api/product/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success response and show a success toast
      toast.success("Product added successfully!");

      // Clear form fields upon successful submission
      setName("");
      setDescription("");
      setPrice("");
      setBestSellers(false);
      setImagePreviews([uploadAreaImage, uploadAreaImage, uploadAreaImage, uploadAreaImage]); // Reset image previews
      setSelectedImages([null, null, null, null]); // Clear the image files
      setSections(["", "", "", ""]); // Reset section values
    } catch (error) {
      // Handle error response and show an error toast
      toast.error("Error uploading product!");
      console.error("Error uploading product:", error);
    }
  };

  return (
    <>
      <ToastContainer /> 
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
        <div>
          <p className="mb-2">Upload Images (Max 4)</p>
          <div className="flex gap-2">
          
            {imagePreviews.map((preview, index) => (
              <div key={index} className="flex flex-col">
                <label htmlFor={`imageUpload${index}`}>
                  <img className="upload-image cursor-pointer" src={preview} alt={`Upload Preview ${index + 1}`} />
                  <input
                    type="file"
                    id={`imageUpload${index}`}
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)} // Handle image upload per slot
                    hidden
                  />
                </label>
                <input
                  type="text"
                  placeholder="Enter section"
                  value={sections[index]}
                  onChange={(e) => handleSectionChange(e, index)} // Handle section input change per slot
                  className="form-control mt-2"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3 mt-3 p-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type here"
          />
        </div>

        <div className="mb-3 mt-4 p-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Product Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write down"
          />
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="inputPrice"
              className="form-control"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="form-check mt-4 p-4">
          <input
            onChange={() => setBestSellers((prev) => !prev)}
            checked={bestSellers}
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Add to BestSellers
          </label>
        </div>

        <div>
          <button className="btn btn-dark rounded-pill px-3 m-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddItems;*/

/*import { useState } from "react";
import uploadAreaImage from "../assets/upload_area.png"; // Default placeholder image
import axios from "axios"; // Axios for API calls
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import "./sidebar.css"; // Custom CSS

const AddItems = () => {
  const [imageDetails, setImageDetails] = useState([
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
  ]);

  // Handle image upload
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedDetails = [...imageDetails];
      updatedDetails[index].preview = URL.createObjectURL(file);
      updatedDetails[index].image = file;
      setImageDetails(updatedDetails);
    }
  };

  // Handle field changes (for name, author, price, section)
  const handleFieldChange = (e, index, field) => {
    const updatedDetails = [...imageDetails];
    updatedDetails[index][field] = e.target.value;
    setImageDetails(updatedDetails);
  };

  // Submit form data
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    // Loop through imageDetails and append each image and its associated fields
    imageDetails.forEach((detail) => {
      if (detail.image) {
        formData.append("images", detail.image); // Append each image
        formData.append("name", detail.name);     // Append book name
        formData.append("author", detail.author); // Append author
        formData.append("price", detail.price);   // Append price
        formData.append("section", detail.section); // Append section
      }
    });

    try {
      const res = await axios.post("http://localhost:3001/api/product/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Books added successfully!");
      // Reset form details after successful submission
      setImageDetails([
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
      ]);
    } catch (error) {
      toast.error("Error uploading books!");
      console.error("Error uploading books:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4">
        <div>
          <p className="mb-2">Upload Books (Max 4)</p>
          <div className="flex flex-wrap gap-4">
            {imageDetails.map((detail, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label htmlFor={`imageUpload${index}`}>
                  <img
                    className="upload-image cursor-pointer"
                    src={detail.preview}
                    alt={`Upload Preview ${index + 1}`}
                  />
                  <input
                    type="file"
                    id={`imageUpload${index}`}
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    hidden
                  />
                </label>
                <input
                  type="text"
                  placeholder="Book Name"
                  value={detail.name}
                  onChange={(e) => handleFieldChange(e, index, "name")}
                  className="form-control"
                  required
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={detail.author}
                  onChange={(e) => handleFieldChange(e, index, "author")}
                  className="form-control"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={detail.price}
                  onChange={(e) => handleFieldChange(e, index, "price")}
                  className="form-control"
                  required
                />
                <select
                  value={detail.section}
                  onChange={(e) => handleFieldChange(e, index, "section")}
                  className="form-select"
                  required
                >


                  
                  <option value="" disabled>Select Section</option>
                  <option value="popular in punjab">popular in punjab</option>
                  <option value="punjabi literature">punjabi literature</option>
                  <option value="punjabi culture">punjabi culture</option>
                  <option value="best sellers">best sellers</option>
                </select>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-dark rounded-pill px-3 m-4" type="submit">
          Add Books
        </button>
      </form>
    </>
  );
};

export default AddItems;*/
import { useState } from "react";
import uploadAreaImage from "../assets/upload_area.png"; // Default placeholder image
import axios from "axios"; // Axios for API calls
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import "./sidebar.css"; // Custom CSS

const AddItems = () => {
  const [imageDetails, setImageDetails] = useState([
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
    { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
  ]);

  // Handle image upload
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedDetails = [...imageDetails];
      updatedDetails[index].preview = URL.createObjectURL(file);
      updatedDetails[index].image = file;
      setImageDetails(updatedDetails);
    }
  };

  // Handle field changes (for name, author, price, section)
  const handleFieldChange = (e, index, field) => {
    const updatedDetails = [...imageDetails];
    updatedDetails[index][field] = e.target.value;
    setImageDetails(updatedDetails);
  };

  // Submit form data
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Prepare form data for each book
      const requests = imageDetails.map(async (detail) => {
        if (detail.image && detail.name && detail.author && detail.price && detail.section) {
          const formData = new FormData();
          formData.append("images", detail.image); // Ensure the field name matches with backend
          formData.append("name", detail.name);
          formData.append("author", detail.author);
          formData.append("price", detail.price);
          formData.append("section", detail.section);

          return axios.post("http://localhost:3001/api/product/add", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        }
        return null;
      });

      // Wait for all requests to complete
      const responses = await Promise.all(requests);

      // Check if all requests succeeded
      if (responses.every((response) => response?.status === 200)) {
        toast.success("Books added successfully!");
      } else {
        toast.error("Some books were not uploaded. Check your inputs.");
      }

      // Reset form details after successful submission
      setImageDetails([
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
        { preview: uploadAreaImage, image: null, name: "", author: "", price: "", section: "" },
      ]);
    } catch (error) {
      toast.error("Error uploading books!");
      console.error("Error uploading books:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4">
        <div>
          <p className="mb-2">Upload Books (Max 4)</p>
          <div className="flex flex-wrap gap-4">
            {imageDetails.map((detail, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label htmlFor={`imageUpload${index}`}>
                  <img
                    className="upload-image cursor-pointer"
                    src={detail.preview}
                    alt={`Upload Preview ${index + 1}`}
                  />
                  <input
                    type="file"
                    id={`imageUpload${index}`}
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index)}
                    hidden
                  />
                </label>
                <input
                  type="text"
                  placeholder="Book Name"
                  value={detail.name}
                  onChange={(e) => handleFieldChange(e, index, "name")}
                  className="form-control"
                  required
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={detail.author}
                  onChange={(e) => handleFieldChange(e, index, "author")}
                  className="form-control"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={detail.price}
                  onChange={(e) => handleFieldChange(e, index, "price")}
                  className="form-control"
                  required
                />
                <select
                  value={detail.section}
                  onChange={(e) => handleFieldChange(e, index, "section")}
                  className="form-select"
                  required
                >
                  <option value="" disabled>Select Section</option>
                  <option value="popular in punjab">popular in punjab</option>
                  <option value="punjabi literature">punjabi literature</option>
                  <option value="punjabi culture">punjabi culture</option>
                  <option value="best sellers">best sellers</option>
                </select>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-dark rounded-pill px-3 m-4" type="submit">
          Add Books
        </button>
      </form>
    </>
  );
};

export default AddItems;
