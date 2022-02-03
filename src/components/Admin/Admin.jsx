import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

import './Admin.css';

const Admin = () => (
  <>
    <Header />
    <main className="admin-container">
      <Link to="/admin/cocktails" className="admin-cocktails">
        <div className="logo-basket1-cercle">
          <p>Editer/Créer les cocktails</p>
        </div>
      </Link>
      <Link to="/admin/archives" className="link-categories">
        <div className="logo-basket1-cercle">
          <p>Voir les produits Archivés</p>
        </div>
      </Link>
    </main>
    <FooterAdmin />
  </>
);

export default Admin;
