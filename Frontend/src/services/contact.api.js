import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BACKEND_BASEURL,
    withCredentials: true,
});

export const createContact = async ({ name, email, phoneNo, message }) => {
    try {
        const response = await api.post("/api/contact", { name, email, phoneNo, message });
        return response.data;
    } catch (error) {
        console.error("Error creating contact:", error.response?.data);
        throw error.response?.data ;
    }
}