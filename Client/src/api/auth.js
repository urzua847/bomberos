import axios from './axios';

const API = 'http://localhost:9000/api'

export const inventoryRequest = user => axios.post(`${API}/inventory`, user);
export const evaluationRequest = user => axios.post(`${API}/evaluations`, user);
export const notificationRequest = user => axios.post(`${API}/notifications`, user);
export const homeRequest = user => axios.post(`${API}/home`, user);
export const supportAlertRequest = user => axios.post(`${API}/supportAlert`, user);
export const userRequest = user => axios.post(`${API}/users`, user);

