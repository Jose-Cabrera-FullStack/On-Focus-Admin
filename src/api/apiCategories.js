const axios = require("axios");

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})

// Courses Endpoints
export const insertCategory = payload => api.post(`/category`, payload)
export const getAllCategories = () => api.get(`/category`)
export const updateCategoryById = (id, payload) => api.put(`/category/${id}`, payload)
export const updateCategoryStatusbyId = (id, payload) => api.patch(`/category/${id}`, payload)
export const sendCategoryToTrash = (id, payload) => api.put(`/unpublishcategory/${id}`, payload)
export const deleteCategoryById = id => api.delete(`/category/${id}`)
export const getCategoryById = id => api.get(`/category/${id}`)

const apiCategories = {
    insertCategory,
    getAllCategories,
    updateCategoryById,
    updateCategoryStatusbyId,
    sendCategoryToTrash,
    deleteCategoryById,
    getCategoryById,
}

export default apiCategories