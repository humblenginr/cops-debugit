import axios from "axios";


export const BASE_URL = "http://localhost:3000/"


export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json',}
})


export function authorize(token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}