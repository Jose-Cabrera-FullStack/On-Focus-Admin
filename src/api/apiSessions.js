const config = require("./apiConfig.json");
import axios from 'axios'

const api = axios.create({
    baseURL: config.connectionString,
    timeout: 10000,
})

// Session Endpoints
export const createSession = payload => api.post(`/loginSession`, payload)
export const logoutSession = (id, payload) => api.put(`/logoutSession/${id}`, payload)

const apiSessions = {
    createSession,
    logoutSession
}

export default apiSessions