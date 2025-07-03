import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
})

const getClients = () => api.get("/clients")

export default getClients