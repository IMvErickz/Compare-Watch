import axios from "axios";

interface ApiProps{
    accessToken: string
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const user = localStorage.getItem('user')
if (user) {
    const parseUser: ApiProps = JSON.parse(user)
    api.defaults.headers.common['Authorization'] = parseUser.accessToken
 }