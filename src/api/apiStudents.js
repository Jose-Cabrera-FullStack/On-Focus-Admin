const config = require("./apiConfig.json");
const axios = require("axios");

const api = axios.create({
    baseURL: config.connectionString,
    timeout: 10000,
})

// Students Endpoints
export const insertStudent = payload => api.post(`/student`, payload)
export const getAllStudents = () => api.get(`/student`)
export const updateStudentById = (id, payload) => api.put(`/student/${id}`, payload)
export const deleteStudentById = id => api.delete(`/student/${id}`)
export const getStudentById = id => api.get(`/student/${id}`)

const apiStudents = {
    insertStudent,
    getAllStudents,
    updateStudentById,
    deleteStudentById,
    getStudentById,
}

export default apiStudents