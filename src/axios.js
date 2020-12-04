import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-a1d25-default-rtdb.firebaseio.com'
});

export default axiosInstance;