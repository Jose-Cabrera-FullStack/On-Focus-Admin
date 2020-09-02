const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
    timeout: 20000,
})

// Courses Endpoints
export const insertCategory = payload => api.post(`/category`, payload)
export const getAllCategories = () => api.get(`/category`)
export const updateCategoryById = (id, payload) => api.put(`/category/${id}`, payload)
export const sendCategoryToTrash = (id) => api.put(`/unpublishcategory/${id}`)
export const deleteCategoryById = id => api.delete(`/category/${id}`)
export const getCategoryById = id => api.get(`/category/${id}`)

const apiCategories = {
    insertCategory,
    getAllCategories,
    updateCategoryById,
    sendCategoryToTrash,
    deleteCategoryById,
    getCategoryById,
}

export default apiCategories