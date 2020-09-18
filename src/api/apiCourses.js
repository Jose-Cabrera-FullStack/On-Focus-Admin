const axios = require("axios");

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})

// Courses Endpoints
export const insertCourse = payload => api.post(`/course`, payload)
export const getAllCourses = () => api.get(`/course`)
export const updateCourseById = (id, payload) => api.put(`/course/${id}`, payload)
export const updateCourseStatusbyId = (id, payload) => api.patch(`/course/${id}`, payload)
export const sendCourseToTrash = (id, payload) => api.put(`/unpublishcourse/${id}`, payload)
export const deleteCourseById = id => api.delete(`/course/${id}`)
export const getCourseById = id => api.get(`/course/${id}`)

const apiCourses = {
    insertCourse,
    getAllCourses,
    updateCourseById,
    updateCourseStatusbyId,
    sendCourseToTrash,
    deleteCourseById,
    getCourseById,
}

export default apiCourses