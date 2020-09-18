const axios = require("axios");

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})

// Teachers Endpoints
export const insertTeacher = payload => api.post(`/teacher`, payload)
export const getAllTeachers = () => api.get(`/teacher`)
export const updateTeacherById = (id, payload) => api.put(`/teacher/${id}`, payload)
export const updateTeacherStatusbyId = (id, payload) => api.patch(`/teacher/${id}`, payload)
export const sendTeacherToTrash = (id, payload) => api.put(`/unpublishteacher/${id}`, payload)
export const deleteTeacherById = id => api.delete(`/teacher/${id}`)
export const getTeacherById = id => api.get(`/teacher/${id}`)

const apiTeachers = {
    insertTeacher,
    getAllTeachers,
    updateTeacherById,
    updateTeacherStatusbyId,
    sendTeacherToTrash,
    deleteTeacherById,
    getTeacherById,
}

export default apiTeachers