import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000', withCredentials: true })

/* Bearer */
api.interceptors.request.use((req) => {
    const accesstoken = JSON.parse(localStorage.getItem('user'))?.accesstoken
    if (accesstoken)
        req.headers.authorization = `Bearer ${accesstoken}`
    return req
})

/* memories */

export const fetchMemories = async () => {
    return await api.get(`/memories`)
}

export const fetchMemory = async (id) => {
    return await api.get(`/memories/${id}`)
}

export const createMemory = async (newMemory) => {
    return await api.post(`/memories`, newMemory)
}

export const updateMemory = async (id, newMemory) => {
    return await api.put(`/memories/${id}`, newMemory)
}

export const deleteMemory = async (id) => {
    return await api.delete(`/memories/${id}`)
}

/* user */

export const signupUser = async (formdata) => {
    return await api.post(`/user/signup`, formdata)
}

export const signinUser = async (formdata) => {
    return await api.post('/user/signin', formdata)
}

export const logoutUser = async (id) => {
    return await api.get(`/user/logout/${id}`)
}

export const refreshAccesstokenUser = async (id) => {
    return await api.get(`user/refresh/${id}`)
}