const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
})

// Trash Endpoints
export const getTrash = () => api.get(`/trash`)
export const deleteTrashById = id => api.delete(`/trash/${id}`)
export const restoreTrashById = id => api.put(`/trash/${id}`)

const apiTrash = {
    getTrash,
    deleteTrashById,
    restoreTrashById
}

export default apiTrash