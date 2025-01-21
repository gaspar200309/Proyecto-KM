import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { saveToken } from './authFunctions';
import { loginUser } from '../../service/api';
import ScrollToTop from '../../components/scrooll/Scrooll';
import './Login.css';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import InputText from '../../components/inputs/InputText';

export default function LoginUser() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset error message
    try {
      const result = await loginUser(credentials);
      console.log('Login result:', result); 
      
      if (result.data.token) {
        saveToken(result.data.token);
        /* saveUser({ username: result.data.username, role: result.data.role, foto_base64: result.data.foto_base64 }); */
        navigate('/listForm');
        //window.location.reload();
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Credenciales incorrectas');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <ScrollToTop />
      <div className="login-form">
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit}>
          <InputText
            label="Usuario"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <div className="password-container">
            <InputText
              type={showPassword ? "text" : "password"}
              name="password"
              label="Contraseña"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="button" onClick={toggleShowPassword} className="toggle-password">
              {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          <Link to="/reset">¿Olvidaste la contraseña?</Link>
          <PrimaryButton type="primary" value="Ingresar" />
        </form>
      </div>
    </div>
  );
}
