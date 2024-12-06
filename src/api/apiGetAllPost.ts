// src/api/apiGetAllPost.ts
import axios from 'axios';

const API_URL = 'https://dacnbe.onrender.com/post/getAllPosts';

export const getAllPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
