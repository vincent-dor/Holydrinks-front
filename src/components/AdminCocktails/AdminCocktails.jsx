import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import ArrowUp from '../ArrowUp/ArrowUp';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

import './AdminCocktails.css';

const AdminCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCocktails = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/cocktails`
    );
    setCocktails(data);
  };

  useEffect(fetchCocktails, []);

  return (
    <main className="admin-cocktail-container">
      <Header />
      <div className="admin-cocktails-container">
        <Link to="/admin/creer">
          <button type="button" className="button-cocktail-create">
            Créer un cocktail
          </button>
        </Link>
      </div>
      <div className="admin-cocktails-information">
        {cocktails.map((cocktail, i) => (
          <section className="admin-cocktails-container" key={i}>
            <div className="admin-cocktails-image">
              <img
                src={cocktail.image}
                alt=""
                className="admin-cocktails-img"
              />
            </div>
            <div className="admin-cocktails-description">
              <h2 className="admin-cocktails-name">{cocktail.name}</h2>
            </div>
            <Link to={`/admin/cocktails/${cocktail.id}`}>
              <button type="button" className="button-cocktail-create">
                Mettre les ingrédients
              </button>
            </Link>
          </section>
        ))}
      </div>
      <ArrowUp />
      <FooterAdmin />
    </main>
  );
};

export default AdminCocktails;
