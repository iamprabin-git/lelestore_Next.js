import config from '@/config';
import axios from 'axios';
import api from './api';

async function getProperties() {
    return await axios.get(`${config.apiUrl}/api/products`);
}

async function getPropertyByUser() {
    return await api.get(`${config.apiUrl}/api/products/users`);
}
async function getPropertyById(id) {
    return await axios.get(`${configxaxiosUrl}/api/products/${id}`);
}
async function getCategories() {
    return await axios.get(`${config.apiUrl}/api/products/categories`);
}

export { getProperties, getPropertyById, getPropertyByUser, getCategories };