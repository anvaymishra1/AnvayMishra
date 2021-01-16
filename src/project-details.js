import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-dbbb9-default-rtdb.firebaseio.com/',
})

export default instance