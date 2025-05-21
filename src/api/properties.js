import config from '@/config';
import axios from 'axios';
import api from './api';

 async function createProperty(data) {
  return await api.post('/api/products', data
  );
}
async function getProperties() {
    return await axios.get(`${config.apiUrl}/api/products`);
}

async function getPropertyByUser() {
    return await api.get(`/api/products/users`);
}

async function getPropertyById(id) {
    return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getCategories() {
    return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function updateProperty(id, data) {
    return await api.put(`/api/products/${id}`, data);
}

async function deleteProperty(id) {
    return await api.delete(`/api/products/${id}`);
}


    


export {
    getProperties,
    getPropertyById,
    getPropertyByUser,
    getCategories,
    createProperty,
    updateProperty,
    deleteProperty,
};
