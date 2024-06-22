// src/api/carService.js
import axiosInstance from './interceptor';

const API_URL = '/cars';

const getAllCars = () => axiosInstance.get(API_URL);
const getCarById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const createCar = (carData) => axiosInstance.post(API_URL, carData);
const updateCar = (id, carData) => axiosInstance.put(`${API_URL}/${id}`, carData);

export { getAllCars, getCarById, createCar, updateCar };
