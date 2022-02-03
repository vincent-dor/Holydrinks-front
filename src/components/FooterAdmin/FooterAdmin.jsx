import { Link } from 'react-router-dom';
import logoHolyDrinks from '../../assets/HolyDrinks.png';

import './FooterAdmin.css';

const FooterAdmin = () => (
  <>
    <div className="button-footer-admin-choice">
      <Link to="/admin">
        <button type="button" className="button-footer-admin">
          Admin
        </button>
      </Link>
      <Link to="/disconnect">
        <button type="button" className="button-footer-admin">
          Déconnexion
        </button>
      </Link>
    </div>
    <footer className="footer-admin">
      <div className="logo-holydrinks-cercle">
        <img
          src={logoHolyDrinks}
          className="logo-holydrinks-footer-admin"
          alt="Holydrinks logo for cocktails lovers"
        />
      </div>
    </footer>
  </>
);

export default FooterAdmin;
