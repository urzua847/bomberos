import axios from 'axios';

const API = 'http://localhost:9000/api'

export const recorRequest = user => axios.post(`${API}/records`, user);