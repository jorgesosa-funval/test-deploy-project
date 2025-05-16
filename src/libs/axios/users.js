import { instance } from ".";

export const listUsers = async () => {
    try {
        const response = await instance.get('/users');
        return response;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}