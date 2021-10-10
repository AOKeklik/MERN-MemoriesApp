import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000' })

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