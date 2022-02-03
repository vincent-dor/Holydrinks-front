import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
 
  const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/categories`,);
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="categories-container">
        {
          categories.map((categorie, i) => (
            <Link to={`/categories/${categorie.id}/cocktails`} key={i}>
              <button type="button" className="product-category" key={i}>
                <img src="" alt={`Icon of ${categorie.name}`} className="category-icon" />
                <p className="category-title">
                  {categorie.name}
                </p>
              </button>
            </Link>
          ))
        }
      </main>
      <Footer />
    </>
  );
};

export default Categories;