import config from '@/config';
import axios from 'axios';
import api from './api';
import getFormatedParams from '@/helpers/formatSearchParams';

 async function createProperty(data) {
  return await api.post('/api/products', data
  );
}
async function getProperties(searchParams) {
   const query = getFormatedParams(searchParams);
    return await axios.get(`${config.apiUrl}/api/products?${query}`);
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
