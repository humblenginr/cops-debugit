import axios from "axios";
import { BASE_URL } from "../Constants/BaseUrl";




export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json',}
})


export function authorize(token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}