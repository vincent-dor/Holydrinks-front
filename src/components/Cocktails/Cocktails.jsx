import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Cocktail from '../Cocktail/Cocktail';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Cocktails.css';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const { id: categoryId} = useParams();

  const fetchCocktailsByCategory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/categories/${categoryId}/cocktails`);
    setCocktails(data);
  };

  useEffect(() => {
    fetchCocktailsByCategory();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="cocktails-main-container">
          {cocktails.map((cocktail, i) => (
            <Cocktail cocktail={cocktail} key={i} />
          ))}
          {cocktails.length === 0 && (
            <p className="cocktails-empty">Aucun cocktail disponible</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cocktails;