import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-home">
        <div className="welcome-home">
          <p className="word-home">BIENVENUE</p>
        </div>
        <div className="description-home">
          <h4 className="history-home">Bienvenue sur le site de HolyDrinks!</h4>
          <p className="history-home">
            Ici vous trouverez divers cocktails à voir et à déguster ainsi que
            la liste des ingrédients à avoir si vous avez envie de vous faire
            plaisir! N'hésitez surtout pas à regarder en long et en large ce
            site!
          </p>
          <p className="history-home">
            Des grands classiques comme le punch ou la sangria aux cocktails
            plus exotiques comme la caïpirinha ou le mojito, devenez expert en
            cocktails colorés et savoureux, pour un apéritif festif!
          </p>
          <p className="history-home">
            Faites vous plaisir et bonne journée à vous!
          </p>
        </div>
        <Link to="/categories">
          <div className="categories-home">
            <button type="button" className="button-home">
              Voir les catégories
            </button>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Home;
