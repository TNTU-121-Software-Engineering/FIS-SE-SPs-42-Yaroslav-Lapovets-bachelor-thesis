import axiosInstance from './interceptor';

const API_URL = '/favors';

const getAllFavors = () => axiosInstance.get(API_URL);
const getFavorById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const createFavor = (favorData) => axiosInstance.post(`/orders/${favorData.orderId}${API_URL}`, favorData);
const updateFavor = (id, favorData) => axiosInstance.put(`${API_URL}/${id}`, favorData);

export { getAllFavors, getFavorById, createFavor, updateFavor };
