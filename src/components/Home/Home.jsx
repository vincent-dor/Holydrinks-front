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
          <p className="history-home">
            BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
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
