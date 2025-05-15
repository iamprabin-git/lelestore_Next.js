import config from '@/config';
import axios from 'axios';

async function getProperties() {
    return await axios.get(`${config.apiUrl}/api/products`);
}

async function getPropertyById(id) {
    return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

export { getProperties, getPropertyById };