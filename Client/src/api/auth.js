import axios from 'axios';

const API = 'http://localhost:9000/api'

export const recordRequest = user => axios.post(`${API}/records`, user);