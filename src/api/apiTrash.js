const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
})

// Trash Endpoints
export const getTrash = () => api.get(`/trash`)

const apiTrash = {
    getTrash
}

export default apiTrash