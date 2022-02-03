import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ArrowUp from '../ArrowUp/ArrowUp';

import './Cocktail.css';

const CocktailList = ({ cocktail }) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/cocktails/${cocktail.id}/ingredients`
    );
    setIngredients(data);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className="cocktails-container">
      <h2 className="cocktails-name">{cocktail.name}</h2>
      <div className="cocktails-image">
        <img src={cocktail.image} alt="" className="cocktails-img" />
      </div>
      <div className="cocktails-description">
        <h3 className="cocktails-title">Description</h3>
        <p className="cocktails-resume">{cocktail.description}</p>
        <div className="cocktails-ingredient">
          <h3 className="cocktails-title">Ingrédients</h3>
          {ingredients.map((ingredient) => (
            <p className="test">{ingredient.ingredient}</p>
          ))}
        </div>
        <div className="cocktails-post">
          <p>Posté par: {cocktail.userFirstName}</p>
        </div>
      </div>
      <ArrowUp />
    </div>
  );
};

export default CocktailList;
