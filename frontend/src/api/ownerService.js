// src/api/ownerService.js
import axiosInstance from './interceptor';

const API_URL = '/owners';

const getAllOwners = () => axiosInstance.get(API_URL);
const getOwnerById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const getAllOrdersByOwnerId = (id) => axiosInstance.get(`${API_URL}/${id}/orders`);
const createOwner = (ownerData) => axiosInstance.post(API_URL, ownerData);
const updateOwner = (id, ownerData) => axiosInstance.put(`${API_URL}/${id}`, ownerData);

export { getAllOwners, getOwnerById, getAllOrdersByOwnerId, createOwner, updateOwner };
