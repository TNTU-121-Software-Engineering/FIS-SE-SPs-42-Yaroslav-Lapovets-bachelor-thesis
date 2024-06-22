import axiosInstance from './interceptor';

const API_URL = '/goods';

const getAllGoods = () => axiosInstance.get(API_URL);
const getGoodsById = (id) => axiosInstance.get(`${API_URL}/${id}`);
const createGoods = (goodsData) => axiosInstance.post(`/orders/${goodsData.orderId}${API_URL}`, goodsData);
const updateGoods = (id, goodsData) => axiosInstance.put(`${API_URL}/${id}`, goodsData);

export { getAllGoods, getGoodsById, createGoods, updateGoods };
