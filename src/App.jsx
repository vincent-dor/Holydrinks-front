import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppProvider from './contexts/AppProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Cocktails from './components/Cocktails/Cocktails';
import NoPage from './components/NoPage/NoPage';
import Admin from './components/Admin/Admin';

const App = () => (
  <div className="App">
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/categories/:id/cocktails" element={<Cocktails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
    </AppProvider >
  </div>
);

export default App;
