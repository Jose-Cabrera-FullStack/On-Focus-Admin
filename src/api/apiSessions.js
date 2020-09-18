const axios = require("axios");

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
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