import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://www.hs-service.api.crealape.com/api/v1/', 
    headers:{
        'Content-Type': "application/json",  // Correct format with hyphen and proper capitalization
    },
    withCredentials: true,
});


instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 && window.location.pathname !== "/test-deploy-project/login") {
            // Handle unauthorized access
            console.error("Unauthorized access - redirecting to login");
            window.location.href = "/test-deploy-project/#/login";
        }
        return Promise.reject(error);
    }
);