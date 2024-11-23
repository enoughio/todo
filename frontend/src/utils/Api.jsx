import axios from "axios"

const Api = axios.create({
    baseURL: "https://todo-list-ec5g.onrender.com"
})

export default Api;
