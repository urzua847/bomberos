import axios from './axios'

export const getRecordRequest = () => axios.get('/records');

export const getOneRecordRequest = (id) => axios.get(`/records/${id}`);

export const createRecordRequest = (record) => axios.post('/records', record);

export const updateRecordRequest = (record) => axios.put(`/records/${record._id}`, record);

export const deleteRecordRequest = (id) => axios.delete(`/records/${id}`);