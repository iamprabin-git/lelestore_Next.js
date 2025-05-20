import config from '@/config';
import axios from 'axios';
import api from './api';

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

async function createProperty(formData) {
    return await api.post(`/api/products`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export {
    getProperties,
    getPropertyById,
    getPropertyByUser,
    getCategories,
    createProperty
};
