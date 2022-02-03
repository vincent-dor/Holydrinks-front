import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Oups from '../../assets/oups.jpg';

import './NoPage.css';

const NoPage = () => (
  <>
    <Header />
    <main className="nopage-container">
      <div className="nopage-content">
        <img src={Oups} alt="oups" className="nopage-image" />
        <h3 className="nopage-oups">Oops, this page does not exist!</h3>
      </div>
    </main>
    <Footer />
  </>
);

export default NoPage;
