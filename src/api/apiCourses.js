const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
})

// Courses Endpoints
export const insertCourse = payload => api.post(`/course`, payload)
export const getAllCourses = () => api.get(`/course`)
export const updateCourseById = (id, payload) => api.put(`/course/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/${id}`)
export const getCourseById = id => api.get(`/course/${id}`)

const apiCourses = {
    insertCourse,
    getAllCourses,
    updateCourseById,
    deleteCourseById,
    getCourseById,
}

export default apiCourses