// src/utils/config.js
//export const baseUrl = `https://books-shopping-2.onrender.com`;

//export const Server_URL = "http://localhost:3000/";
export const Server_URL = process.env.REACT_APP_API_URL;

// Local server URL

// If using environment variables, uncomment below
// export const Server_URL =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:9000/"
//     : "https://your-production-server-url.com/";
