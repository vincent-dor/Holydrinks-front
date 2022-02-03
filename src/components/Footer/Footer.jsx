import { Link } from 'react-router-dom';
import logoHolyDrinks from '../../assets/HolyDrinks.png';

import './Footer.css';

const Footer = () => (
  <>
    <div>
      <Link to="/login">
        <button type="button" className="button-footer">
          Connection Admin
        </button>
      </Link>
    </div>
    <footer className="footer">
      <div>
        <Link to="/">
          <button type="button" className="button-footer">
            Home
          </button>
        </Link>
      </div>
      <div className="logo-holydrinks-cercle">
        <img
          src={logoHolyDrinks}
          className="logo-holydrinks-footer"
          alt="Holydrinks logo for cocktails lovers"
        />
      </div>
      <div>
        <Link to="/categories">
          <button type="button" className="button-footer">
            Catégories
          </button>
        </Link>
      </div>
    </footer>
  </>
);

export default Footer;
