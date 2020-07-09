import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// Teachers Endpoints
export const insertTeacher = payload => api.post(`/teacher`, payload)
export const getAllTeachers = () => api.get(`/teacher`)
export const updateTeacherById = (id, payload) => api.put(`/teacher/${id}`, payload)
export const deleteTeacherById = id => api.delete(`/teacher/${id}`)
export const getTeacherById = id => api.get(`/teacher/${id}`)

const apiTeachers = {
    insertTeacher,
    getAllTeachers,
    updateTeacherById,
    deleteTeacherById,
    getTeacherById,
}

export default apiTeachers