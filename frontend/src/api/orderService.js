import axiosInstance from './interceptor';

const API_URL = '/orders';

const getAllOrders = () => axiosInstance.get(API_URL);
const getOrderById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const createOrder = (orderData) => axiosInstance.post(API_URL, orderData);
const updateOrder = (id, orderData) => axiosInstance.put(`${API_URL}/${id}`, orderData);
const updateOrderStatus = (orderId, newStatus) => axiosInstance.put(`/orders/${orderId}/status`, null, {
            params: { newStatus },
        });
export { getAllOrders, getOrderById, createOrder, updateOrder, updateOrderStatus};
