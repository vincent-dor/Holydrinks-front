import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppProvider from './contexts/AppProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Cocktails from './components/Cocktails/Cocktails';
import NoPage from './components/NoPage/NoPage';
import Admin from './components/Admin/Admin';
import Disconnect from './components/Disconnect/Disconnect';
import AdminCocktails from './components/AdminCocktails/AdminCocktails';
import AdminCreate from './components/AdminCreate/AdminCreate';
import AdminEdit from './components/AdminEdit/AdminEdit';

const App = () => (
  <div className="App">
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/cocktails" element={<AdminCocktails />} />
          <Route path="/admin/cocktails/:id" element={<AdminEdit/>} />
          <Route path="/admin/creer" element={<AdminCreate />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id/cocktails" element={<Cocktails />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AppProvider>
  </div>
);

export default App;
