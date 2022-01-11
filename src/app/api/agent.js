import axios from "axios";
import { toast } from "react-toastify";

const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

axios.defaults.baseURL= "https://localhost:5001/api/";
// axios.defaults.baseURL= "https://localhost:44339/api/";

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
    // await sleep();
    return response;
}, error => {
    console.log(error);
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

const Cars = {
    GetAll: () => requests.get("cars"),
    GetAllAssigned: () => requests.get("cars/assigned"),
    GetAllUnasigned: () => requests.get("cars/unassigned"),
    Get: id => requests.get(`cars/${id}`),
    Update: payload => requests.put(`cars/${payload.id}`, payload.user),
    Delete: id => requests.delete("cars", id),
    AssignUser: payload => requests.put(`cars/${payload.carId}/assignUser`, payload.userId),
    DissociateUser: payload => requests.put(`cars/${payload.carId}/dissociateUser`, payload.userId),
}

const History = {
    GetAll: () => requests.get("cars/history"),
    GetAllForCar: carId => requests.get(`cars/${carId}/history`),
    Get: id => requests.get(`cars/history/${id}`),
    Add: payload => requests.post(`cars/${payload.id}/history`, payload.history),
    Update: payload => requests.put(`cars/${payload.id}/history`, payload.history),
    Delete: id => requests.delete(`cars/${id}/history`),
}

const Tickets = {
    GetAll: () => requests.get("ticket"),
    GetAllForCar: id => requests.get(`cars/${id}/tickets`),
    Get: id => requests.get(`ticket/${id}`),
    Add: payload => requests.post(`ticket`, payload.ticket),
    Update: payload => requests.put(`ticket/${payload.id}`, payload.ticket),
    Delete: id => requests.delete(`ticket`, id),
    GetTicketTypes: () => requests.get("ticket/type"),
    GetStatusTypes: () => requests.get("ticket/status")
}

const agent = {
    Account,
    Users,
    Cars,
    History,
    Tickets
};

export default agent;