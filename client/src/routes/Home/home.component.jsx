/*import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import CategoryItem from "../../component/categoryItem.component";

import YourComponent from '../../component/YourComponent'; // Adjust the path based on your structure
import "./categories.styles.css";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "ats",
      imageUrl: require('../../assets/eight.jpeg'),
      price: "60",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: require('../../assets/ten.jpeg'),
      price: "60",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: require('../../assets/three.jpeg'),
      price: "60",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: require('../../assets/four.jpeg'),
      price: "60",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: require('../../assets/seven.jpeg'),
      price: "60",
    },
    {
      id: 6,
      title: "mens",
      imageUrl: require('../../assets/six.jpeg'),
      price: "60",
    },
    {
      id: 7,
      title: "mens",
      imageUrl: require('../../assets/seven.jpeg'),
      price: "60",
    },
    {
      id: 8,
      title: "mens",
      imageUrl: require('../../assets/seven.jpeg'),
      price: "60",
    },
    {
      id: 9,
      title: "mens",
      imageUrl: require('../../assets/ten.jpeg'),
      price: "60",
    },
  ];

  return (
    <Fragment>
      <div className="user-info-container"> 
        <YourComponent /> 
      </div>
      <Outlet />
      <div className="Lone">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;*/
import React from 'react';
import { Outlet } from "react-router-dom";

import CategoryItem from "../../component/categoryItem.component";

import YourComponent from '../../component/YourComponent'; // Adjust the path as necessary
import "./categories.styles.css";

const Home = () => {
  const categories = [
    { id: 1, title: "i", imageUrl: require('../../assets/books/one.jpg'), price: "60" },
    { id: 2, title: "The Art of War", imageUrl: require('../../assets/books/ten.jpg'), price: "60" },
    { id: 3, title: "jackets", imageUrl: require('../../assets/books/two.jpg'), price: "60" },
    { id: 4, title: "jackets", imageUrl: require('../../assets/books/three.jpg'), price: "60" },
    { id: 5, title: "jackets", imageUrl: require('../../assets/books/four.jpg'), price: "60" },
    { id: 6, title: "jackets", imageUrl: require('../../assets/books/five.jpg'), price: "60" },
{ id: 7, title: "jackets", imageUrl: require('../../assets/books/six.jpg'), price: "60" },
{ id: 8, title: "jackets", imageUrl: require('../../assets/books/seven.jpg'), price: "60" },
{ id: 9, title: "jackets", imageUrl: require('../../assets/books/eight.jpg'), price: "60" },
{ id: 10, title: "jackets", imageUrl: require('../../assets/books/nine.jpg'), price: "60" },
{ id: 11, title: "jackets", imageUrl: require('../../assets/book/seventeen.jpg'), price: "60" },
{ id: 12, title: "jackets", imageUrl: require('../../assets/books/elewan.jpg'), price: "60" },
{ id: 13, title: "jackets", imageUrl: require('../../assets/books/tw.jpg'), price: "60" },
{ id: 14, title: "jackets", imageUrl: require('../../assets/books/thirteen.jpg'), price: "60" },
{ id: 15, title: "jackets", imageUrl: require('../../assets/books/fourteen.jpg'), price: "60" },
{ id: 16, title: "jackets", imageUrl: require('../../assets/books/fifteen.jpg'), price: "60" },
{ id: 17, title: "jackets", imageUrl: require('../../assets/book/sixteen.jpg'), price: "60" },
{ id: 18, title: "jackets", imageUrl: require('../../assets/book/eihgteen.jpg'), price: "60" },
{ id: 19, title: "jackets", imageUrl: require('../../assets/book/ninteen.jpg'), price: "60" },
{ id: 20, title: "jackets", imageUrl: require('../../assets/book/twenty.jpg'), price: "60" },
{ id: 21, title: "jackets", imageUrl: require('../../assets/book/twenty one.jpg'), price: "60" },
{ id: 22, title: "jackets", imageUrl: require('../../assets/book/twenty two.jpg'), price: "60" },

{ id: 23, title: "jackets", imageUrl: require('../../assets/book/twenty three.jpg'), price: "60" },
{ id: 24, title: "jackets", imageUrl: require('../../assets/book/twenty four.jpg'), price: "60" },
{ id: 25, title: "jackets", imageUrl: require('../../assets/book/twenty five.jpg'), price: "60" },
{ id: 26, title: "jackets", imageUrl: require('../../assets/book/twenty six.jpg'), price: "60" },
{ id: 27, title: "jackets", imageUrl: require('../../assets/book/Tewenty seven.jpg'), price: "60" },
{ id: 28, title: "jackets", imageUrl: require('../../assets/book/twenty eight.jpg'), price: "60" },
{ id: 29, title: "jackets", imageUrl: require('../../assets/book/twnty nine.jpg'), price: "60" },
{ id: 30, title: "jackets", imageUrl: require('../../assets/bookn/thirty one.jpg'), price: "60" },
//{ id: 31, title: "jackets", imageUrl: require('../../assets/bookn/thirty two.jpg'), price: "60" },
{ id: 32, title: "jackets", imageUrl: require('../../assets/bookn/thirty three .jpg'), price: "60" },
{ id: 33, title: "jackets", imageUrl: require('../../assets/bookn/thirty four.jpg'), price: "60" },
{ id: 34, title: "jackets", imageUrl: require('../../assets/bookn/thirty five.jpg'), price: "60" },
{ id: 35, title: "jackets", imageUrl: require('../../assets/bookn/thirty six.jpg'), price: "60" },
{ id: 36, title: "jackets", imageUrl: require('../../assets/bookn/thirty seven.jpg'), price: "60" },
{ id: 37, title: "jackets", imageUrl: require('../../assets/bookn/thirty eight.jpg'), price: "60" },
{ id: 38, title: "jackets", imageUrl: require('../../assets/bookn/fourty.jpg'), price: "60" },
{ id: 39, title: "jackets", imageUrl: require('../../assets/bookn/fourty one.jpg'), price: "60" },
{ id: 40, title: "jackets", imageUrl: require('../../assets/bookn/fourty three.jpg'), price: "60" },
{ id: 41, title: "jackets", imageUrl: require('../../assets/bookn/fourty two.jpg'), price: "60" },
{ id: 42, title: "jackets", imageUrl: require('../../assets/bookn/fourty four.jpg'), price: "60" },
{ id: 43, title: "jackets", imageUrl: require('../../assets/bookn/fourty five.jpg'), price: "60" },
{ id: 44, title: "jackets", imageUrl: require('../../assets/bookn/forty six.jpg'), price: "60" },
{ id: 45, title: "jackets", imageUrl: require('../../assets/bookn/fourty seven.jpg'), price: "60" },
{ id: 46, title: "jackets", imageUrl: require('../../assets/bookn/fourty eight.jpg'), price: "60" },
{ id: 47, title: "jackets", imageUrl: require('../../assets/bookn/fourty nine.jpg'), price: "60" },
{ id: 48, title: "jackets", imageUrl: require('../../assets/bookn/fivety.jpg'), price: "60" },
{ id: 49, title: "jackets", imageUrl: require('../../assets/bookv/five one.jpg'), price: "60" },
{ id: 50, title: "jackets", imageUrl: require('../../assets/bookv/five two.jpg'), price: "60" },
{ id: 51, title: "jackets", imageUrl: require('../../assets/bookv/five three.jpg'), price: "60" },
{ id: 52, title: "jackets", imageUrl: require('../../assets/bookv/five four.jpg'), price: "60" },
{ id: 53, title: "jackets", imageUrl: require('../../assets/bookv/five five.jpg'), price: "60" },
{ id: 54, title: "jackets", imageUrl: require('../../assets/bookv/five six.jpg'), price: "60" },
{ id: 55, title: "jackets", imageUrl: require('../../assets/bookv/five seven.jpg'), price: "60" },
{ id: 56, title: "jackets", imageUrl: require('../../assets/bookv/five eight.jpg'), price: "60" },
{ id: 57, title: "jackets", imageUrl: require('../../assets/bookv/five nine.jpg'), price: "60" },
{ id: 58, title: "jackets", imageUrl: require('../../assets/bookv/sixty.jpg'), price: "60" },
{ id: 59, title: "jackets", imageUrl: require('../../assets/bookv/six one.jpg'), price: "60" },
  ];

  



return (
    <div>
      <YourComponent /> 
      <Outlet />
      <div className="Lone">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;



