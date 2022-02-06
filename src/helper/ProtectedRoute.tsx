import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext<any>(UserContext)

  return login ? children : <Navigate to='/login' />
};

export default ProtectedRoute;
