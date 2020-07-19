const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
})

// Courses Endpoints
export const insertCategory = payload => api.post(`/category`, payload)
export const getAllCategories = () => api.get(`/category`)
export const updateCategoryById = (id, payload) => api.put(`/category/${id}`, payload)
export const deleteCategoryById = id => api.delete(`/category/${id}`)
export const getCategoryById = id => api.get(`/category/${id}`)

const apiCategories = {
    insertCategory,
    getAllCategories,
    updateCategoryById,
    deleteCategoryById,
    getCategoryById,
}

export default apiCategories