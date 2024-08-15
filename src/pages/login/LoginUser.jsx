import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { saveToken, saveUser } from './authFunctions';
import {loginUser} from '../../service/api'

export default function LoginUser() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const result = await loginUser(credentials);
      console.log('Login result:', result); 
      
      if (result.data.token) {
        saveToken(result.data.token);
        //saveUser({ username: result.data.username, role: result.data.role, foto_base64: result.data.foto_base64 });
        navigate('/listForm');
        window.location.reload();
      } else {
        console.log('Login failed: No token received');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Inicia sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <label>Contraseña</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={toggleShowPassword} className="toggle-password">
              {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          <Link to="/reset">¿Olvidaste la contraseña?</Link>
          <button className="button-primary" type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
