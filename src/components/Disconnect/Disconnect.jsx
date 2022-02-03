import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../../contexts/AppProvider';

const Disconnect = () => {
  const { setUser } = useApp();

  useEffect(() => {
    setUser(null);
  }, []);

  return <Navigate to="/" />;
};

export default Disconnect;
