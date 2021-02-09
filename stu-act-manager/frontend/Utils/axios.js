import axios from "axios";


export const BASE_URL = "http://localhost:3000/"


export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFmN2Y5NmNiODAwMWUyNzUwNmE4OTQiLCJpYXQiOjE2MTI4NTQ5NDF9.gTU01ySERRnzv8_ZP1CWiMmKOg0MtBN9YLo2Gm_XL7A'}
})


// export function authorize(token) {
//     axiosInstance.defaults.headers.common['Authorization'] = `Token ${token}`;
// }