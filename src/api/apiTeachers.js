const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
})

// Teachers Endpoints
export const insertTeacher = payload => api.post(`/teacher`, payload)
export const getAllTeachers = () => api.get(`/teacher`)
export const updateTeacherById = (id, payload) => api.put(`/teacher/${id}`, payload)
export const sendTeacherToTrash = (id, payload) => api.put(`/unpublishteacher/${id}`, payload)
export const deleteTeacherById = id => api.delete(`/teacher/${id}`)
export const getTeacherById = id => api.get(`/teacher/${id}`)

const apiTeachers = {
    insertTeacher,
    getAllTeachers,
    updateTeacherById,
    sendTeacherToTrash,
    deleteTeacherById,
    getTeacherById,
}

export default apiTeachers