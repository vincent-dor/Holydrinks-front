import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './Cocktail.css';

const CocktailList = ({ cocktail }) => {

const [ingredients, setIngredients] = useState([]);

const getIngredients = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/cocktails/${cocktail.id}/ingredients`,);
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
              <p>{cocktail.description}</p>
              <div className="cocktails-ingredient">
              {
          ingredients.map((ingredient) => (
              <p>{ingredient.ingredient}</p>
              ))
              }
        </div> 
        <div><p>Posté par: {cocktail.userFirstName}</p></div>
      </div>
    </div>
  );
};


export default CocktailList;