import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import FooterAdmin from '../FooterAdmin/FooterAdmin';

import './Admin.css';

const Admin = () => (
  <>
    <Header />
    <main className="admin-container">
      <Link to="/admin/cocktails" className="admin-cocktails">
        <div className="admin-category">
          <p className="admin-title">Editer/Créer les cocktails</p>
        </div>
      </Link>
      <Link to="/admin/archive" className="admin-cocktails">
        <div className="admin-category">
          <p className="admin-title">Archiver les cocktails</p>
        </div>
      </Link>
    </main>
    <FooterAdmin />
  </>
);

export default Admin;
