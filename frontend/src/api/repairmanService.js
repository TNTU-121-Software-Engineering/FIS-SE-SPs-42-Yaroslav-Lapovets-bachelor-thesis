import axiosInstance from './interceptor';

const API_URL = '/repairmans';

const getAllRepairmans = () => axiosInstance.get(API_URL);
const getRepairmanById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const createRepairman = (repairmanData) => axiosInstance.post(API_URL, repairmanData);
const updateRepairman = (id, repairmanData) => axiosInstance.put(`${API_URL}/${id}`, repairmanData);

export { getAllRepairmans, getRepairmanById, createRepairman, updateRepairman };
