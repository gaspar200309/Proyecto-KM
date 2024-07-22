export function parseJwt(token) {
    if (!token) {
      return null;
    }
  
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  
  export function isTokenValid(token) {
    const parsedToken = parseJwt(token);
    if (parsedToken) {
      return parsedToken.exp * 1000 > Date.now();
    }
    return false;
  }
  