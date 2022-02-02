import { Link } from 'react-router-dom';
import logoHolyDrinks from '../../assets/HolyDrinks.png';

import './FooterAdmin.css';

const FooterAdmin = () => (
  <>
    <div className="button-footer-admin-choice">
      <Link to="login">
        <button type="button" className="button-footer-admin">
          Connection Admin
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="button-footer-admin">
          Déconnexion
        </button>
      </Link>
    </div>
    <footer className="footer-admin">
      <div>
        <Link to="/">
          <button type="button" className="button-footer-admin">
            Home
          </button>
        </Link>
      </div>
      <div className="logo-holydrinks-cercle">
        <img
          src={logoHolyDrinks}
          className="logo-holydrinks-footer-admin"
          alt="Holydrinks logo for cocktails lovers"
        />
      </div>
      <div>
        <Link to="categories">
          <button type="button" className="button-footer-admin">
            Catégories
          </button>
        </Link>
      </div>
    </footer>
  </>
);

export default FooterAdmin;