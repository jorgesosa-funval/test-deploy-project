import {instance} from '.';


export const login = async (request) =>{
    try {
        const response = await instance.post('/auth/login', request);
        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

 