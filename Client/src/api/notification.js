import axios from './axios'

export const getNotificationRequest = () => axios.get('/notifications');

export const getOneNotificationRequest = (id) => axios.get(`/notifications/${id}`);

export const createNotificationRequest = (Notification) => axios.post('/notifications', Notification);

export const updateNotificationRequest = (id, Notification) => axios.put(`/notifications/${id}`, Notification);

export const deleteNotificationRequest = (id) => axios.delete(`/notifications/${id}`);