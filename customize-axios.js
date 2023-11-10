import axios from "axios";

const instance = axios.create({
    baseURL: 'https://test-api-n3fv.onrender.com'
})
export default instance