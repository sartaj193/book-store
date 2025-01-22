/*import { Book, Coffee, Heart, Music, Palette, Stars } from "lucide-react";

const categories = [
  { name: "Fiction", icon: Book, color: "bg-blue-100" },
  { name: "Romance", icon: Heart, color: "bg-pink-100" },
  { name: "Art", icon: Palette, color: "bg-purple-100" },
  { name: "Music", icon: Music, color: "bg-green-100" },
  { name: "Lifestyle", icon: Coffee, color: "bg-yellow-100" },
  { name: "Fantasy", icon: Stars, color: "bg-indigo-100" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 rounded-lg cursor-pointer transition-transform hover:scale-105"
            >
              <div className={`${category.color} p-4 rounded-full mb-4`}>
                <category.icon size={24} className="text-gray-700" />
              </div>
              <span className="font-medium text-charcoal">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;*/



/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Server_URL } from "../utils/config";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/category/te`);
      setCategories(response.data); // Adjust response structure if needed
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              className="flex flex-col items-center p-6 rounded-lg cursor-pointer transition-transform hover:scale-105"
            >
              <div className="p-4 rounded-full mb-4 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <span className="font-medium text-charcoal">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
*/


/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Server_URL } from "../utils/config";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/category/te`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
  
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              onClick={() => handleCategoryClick(category._id)}
              className="flex flex-col items-center p-6 rounded-lg cursor-pointer transition-transform hover:scale-105"
            >
              <div className="p-4 rounded-full mb-4 bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <span className="font-medium text-charcoal">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
   
  );
};

export default Categories;
*/


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Server_URL } from "../utils/config";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Server_URL}api/category/te`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-charcoal mb-12 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
              onClick={() => handleCategoryClick(category._id)}
              className="flex flex-col items-center p-6 rounded-lg cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-20 h-20 rounded-full mb-4 bg-gray-100 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-charcoal">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

