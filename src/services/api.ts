import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/filipeveronezi/fake-api'
});

export default api;