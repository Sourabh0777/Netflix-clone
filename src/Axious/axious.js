import axios from 'axios'

const instance = axios.create({
    baseURL:"https://www.themoviedb.org/3"
})

// 4d12c48d5ce7927500f892d571a8284a.

export default instance;