const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
    timeout: 10000,
})

// Courses Endpoints
export const insertCourse = payload => api.post(`/course`, payload)
export const getAllCourses = () => api.get(`/course`)
export const updateCourseById = (id, payload) => api.put(`/course/${id}`, payload)
export const sendCourseToTrash = (id, payload) => api.put(`/unpublishcourse/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/${id}`)
export const getCourseById = id => api.get(`/course/${id}`)

const apiCourses = {
    insertCourse,
    getAllCourses,
    updateCourseById,
    sendCourseToTrash,
    deleteCourseById,
    getCourseById,
}

export default apiCourses