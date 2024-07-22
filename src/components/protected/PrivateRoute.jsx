import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from '../../utils/auth';
import { getToken } from '../../pages/login/authFunctions';

const PrivateRoute = ({ children }) => {
  const token = getToken();
  const tokenExistAndStillValid = token && isTokenValid(token);

  return tokenExistAndStillValid ? children : <Navigate to="/" />;
};

export default PrivateRoute;
