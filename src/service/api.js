import axios from 'axios';

const baseURL = "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  withCredentials: true,
  timeout: 10000
});

export const loginUser = (data) => api.post('/api/auth/login', data);
export const registerUser = (data) => api.post('/api/auth/register', data);
export const chatBot = (data) => api.post('/api/chatbot', data);

export const createCareer = (data) => api.post('/api/carreras/carreras', data);
export const getCareers = () => api.get('/api/carreras/carreras');
export const updateCareer = (id, data) => api.put(`/api/carreras/carreras/${id}`, data);
export const getCareerById = (id) => api.get(`/api/carreras/carreras/${id}`);
export const deleteCareer = (id) => api.delete(`/api/carreras/carreras/${id}`);

export const createUniversidad = (data) => api.post('/api/universidades', data);
export const updateUniversidad = (id, data) => api.put(`/universidades/${id}`, data);
export const getUniversidades = () => api.get('/universidades');
export const getUniversidadById = (id) => api.get(`/universidades/${id}`);
export const deleteUniversidad = (id) => api.delete(`/universidades/${id}`);

export const createBeca = (data) => api.post('/becas', data);
export const updateBeca = (id, data) => api.put(`/becas/${id}`, data);
export const getBecas = () => api.get('/becas');
export const getBecaById = (id) => api.get(`/becas/${id}`);
export const deleteBeca = (id) => api.delete(`/becas/${id}`);


