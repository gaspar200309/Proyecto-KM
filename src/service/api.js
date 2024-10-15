import axios from 'axios';

/* const baseURL =  "http://localhost:3000"; */
const baseURL = process.env.NODE_ENV === 'production'
  ? "https://backend-km-git-main-gaspar200309s-projects.vercel.app"
  : "https://backend-km-git-main-gaspar200309s-projects.vercel.app";


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
export const getCareerRecomended = () => api.get('/api/carreras/recomendadas');

export const createUniversidad = (data) => api.post('/api/universidades', data);
export const updateUniversidad = (id, data) => api.put(`/api/universidades/${id}`, data);
export const getUniversidades = () => api.get('/api/universidades');
export const getUniversidadById = (id) => api.get(`/api/universidades/${id}`);
export const deleteUniversidad = (id) => api.delete(`/api/universidades/${id}`);
export const getUniversidadesRecomendadas = () => api.get('/api/universidades/recomendadas');
export const getInstitutos = () => api.get('/api/universidades/institutos');


export const createBeca = (data) => api.post('/api/becas', data);
export const updateBeca = (id, data) => api.put(`/api/becas/${id}`, data);
export const getBecas = () => api.get('/api/becas');
export const getBecaById = (id) => api.get(`/api/becas/${id}`);
export const deleteBeca = (id) => api.delete(`/api/becas/${id}`);


