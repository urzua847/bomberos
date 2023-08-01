import axios from './axios'

export const getEvaluationRequest = () => axios.get('/evaluations');

export const getOneEvaluationRequest = (id) => axios.get(`/evaluations/${id}`);

export const createEvaluationRequest = (evaluation) => axios.post('/evaluations', evaluation);

export const updateEvaluationRequest = (evaluation) => axios.put(`/evaluations/${evaluation._id}`, evaluation);

export const deleteEvaluationRequest = (id) => axios.delete(`/evaluations/${id}`);