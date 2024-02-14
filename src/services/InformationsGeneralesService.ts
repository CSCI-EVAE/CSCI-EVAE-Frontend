import axios from 'axios';
import { InfosGenerales, ResponseInfoGenerales } from '../types/authTypes';
const API_URL = 'http://localhost:8080/api/v1';

export const informationsGenerales = async (credentials: InfosGenerales): Promise<ResponseInfoGenerales> => {
   
    try {
        const response = await axios.get<ResponseInfoGenerales>(`${API_URL}/list`);
        const token = response.data.data;
       
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        return response.data;
    } catch (error) {
        console.error('Aucun', error);
        throw error;
    }
};
