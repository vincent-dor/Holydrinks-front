import { Link } from 'react-router-dom';
import logoHolyDrinks from '../../assets/HolyDrinks.png';

import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo-holydrinks-cercle">
      <Link to="/">
        <img
          src={logoHolyDrinks}
          className="logo-holydrinks"
          alt="Holydrinks logo for cocktails lovers"
        />
      </Link>
    </div>
  </header>
);

export default Header;
