import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
})

export const getClients = () => api.get("/clients")
export const addClient = () => api.post("/add") 
