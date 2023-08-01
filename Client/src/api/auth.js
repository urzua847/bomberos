import axios from 'axios';

const API = 'http://localhost:9000/api'

export const recordRequest = user => axios.post(`${API}/records`, user);
export const inventoryRequest = user => axios.post(`${API}/inventory`, user);
export const EvaluationRequest = user => axios.post(`${API}/Evaluation`, user);