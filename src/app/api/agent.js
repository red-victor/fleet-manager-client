import axios from "axios";
import { toast } from "react-toastify";

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

axios.defaults.baseURL= "https://localhost:5001/api/";

const responseBody = response =>  response.data;

axios.interceptors.request.use(config => {
    const userString = localStorage.getItem('user');
    let token = null;
    if (userString) {
        token = JSON.parse(userString).token;
    }
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, error => {
    const { data, status } = error.response;

    switch (status) {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break
        default:
            break;
    }

    return Promise.reject(error.response);
});

const requests = {
    get: url => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url, body) => axios.delete(url, body).then(responseBody)
};

const Account = {
    login: values => requests.post("account/login", values),
    register: values => requests.post("account/register", values),
    currentUser: () => requests.get("account/currentUser")
}

const Users = {
    GetAll: () => requests.get("users"),
    Get: id => requests.get(`users/${id}`),
    Update: payload => requests.put(`users/${payload.id}`, payload.user),
    Delete: id => requests.delete("users", id)
}

const agent = {
    Account,
    Users
};

export default agent;