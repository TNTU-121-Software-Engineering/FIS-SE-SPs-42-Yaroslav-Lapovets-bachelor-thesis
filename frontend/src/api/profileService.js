// src/api/profileService.js
import axiosInstance from './interceptor';

export const getUserCars = async () => {
    try {
        const response = await axiosInstance.get('/cars');
        console.log('getUserCars response:', response);
        return response.data; // Assuming response.data contains the DTOs
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

export const getUserOrders = async () => {
    try {
        const response = await axiosInstance.get('/orders');
        console.log('getUserOrders response:', response);
        return response.data; // Assuming response.data contains the DTOs
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
