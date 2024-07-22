import Cookies from 'js-cookie';

export const signOut = () => {
  Cookies.remove('authToken');
  Cookies.remove('userData');
  window.location.reload();
};

export const saveToken = (token) => {
  Cookies.set('authToken', token, { expires: 7, sameSite: 'Strict' }); // La cookie expira en 7 días
};

export const getToken = () => {
  return Cookies.get('authToken');
};

export const saveUser = (userData) => {
  Cookies.set('userData', JSON.stringify(userData), { expires: 7, sameSite: 'Strict' }); // La cookie expira en 7 días
};

export const getUser = () => {
  const userDataString = Cookies.get('userData');
  return userDataString ? JSON.parse(userDataString) : null;
};
