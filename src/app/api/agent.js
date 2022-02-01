import axios from "axios";
import { toast } from "react-toastify";
import utils from "../utils/utils";

// const sleep = () => new Promise(resolve => setTimeout(resolve, 3000));

// axios.defaults.baseURL= "https://localhost:5001/api/";
axios.defaults.baseURL = "https://localhost:44339/api/";
// axios.defaults.baseURL = "https://apifleetmanager.brolake.ro/api/";

const responseBody = response => response.data;

const FILE_HEADER_CONFIG = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}

axios.interceptors.request.use(config => {
    const userString = localStorage.getItem('user');
    let token = null;
    if (userString) {
        var user = JSON.parse(userString);
        token = user.token;
        var role = utils.Authorization.GetRole(token);
        utils.Authorization.SetUserRole(user, role);
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
    post: (url, body, config = null) => axios.post(url, body, config).then(responseBody),
    put: (url, body = null) => axios.put(url, body).then(responseBody),
    delete: (url, body) => axios.delete(url, body).then(responseBody),
};

const Account = {
    login: values => requests.post("account/login", values),
    register: values => requests.post("account/register", values),
    currentUser: () => requests.get("account/currentUser"),
    changeMyPassword: payload => requests.put("account/change-my-password", payload),
    sendResetPasswordLink: payload => requests.post("account/request-reset-password", payload),
    resetPassword: payload => requests.post("account/reset-password", payload),
    requestEmailChange: payload => requests.post("account/request-email-change", payload),
    changeEmail: payload => requests.put("account/change-email", payload),
}

const Users = {
    GetAll: () => requests.get("users"),
    GetByPage: (page = 1) => requests.get(`users/get-by-page?page=${page}&size=10`),
    GetAllWithNoCar: () => requests.get("users/with-no-car"),
    Get: id => requests.get(`users/${id}`),
    Update: payload => requests.put(`users/${payload.id}`, payload.user),
    Delete: id => requests.delete("users", id),
    Search: (str, page = 1) => requests.get(`users/search?name=${str}&page=${page}&pageSize=10`),
    SearchUsersWithNoCar: name => requests.get(`users/search-users-with-no-car/${name}`),
    Download: () => requests.get("users/download/userList"),
}

const Cars = {
    GetAll: () => requests.get("cars"),
    GetByPage: (page = 1) => requests.get(`cars/get-by-page?page=${page}&size=10`),
    GetAllAssigned: () => requests.get("cars/assigned"),
    GetAllUnasigned: () => requests.get("cars/unassigned"),
    Get: id => requests.get(`cars/${id}`),
    Add: payload => requests.post(`cars`, payload.car),
    Update: payload => requests.put(`cars/${payload.id}`, payload.user),
    Delete: id => requests.delete("cars", id),
    AssignUser: payload => requests.put(`cars/${payload.carId}/assignUser/${payload.userId}`),
    DissociateUser: id => requests.put(`cars/${id}/dissociateUser`),
    Search: (str, page=1) => requests.get(`cars/search?name=${str}&page=${page}&pageSize=10`),
    Download: () => requests.get("cars/download/carList"),
}

const History = {
    GetAll: () => requests.get("cars/history"),
    GetAllForCar: carId => requests.get(`cars/${carId}/history`),
    GetAllForUser: userId => requests.get(`users/${userId}/history`),
    Get: id => requests.get(`cars/history/${id}`),
    Add: payload => requests.post(`cars/${payload.history.carId}/history`, payload.history),
    Update: payload => requests.put(`cars/${payload.id}/history`, payload.history),
    Delete: id => requests.delete(`cars/${id}/history`),
}

const Tickets = {
    GetAll: () => requests.get("ticket"),
    GetAllForCar: carId => requests.get(`cars/${carId}/tickets`),
    GetAllForUser: userId => requests.get(`users/${userId}/tickets`),
    Get: id => requests.get(`ticket/${id}`),
    Add: payload => requests.post(`ticket`, payload.ticket),
    Update: payload => requests.put(`ticket/${payload.id}`, payload.ticket),
    Delete: id => requests.delete(`ticket`, id),
    GetTicketTypes: () => requests.get("ticket/type"),
    GetStatusTypes: () => requests.get("ticket/status")
}

const Files = {
    UploadCarExcel: payload => requests.post("cars/upload/carList", payload.file, FILE_HEADER_CONFIG),
    UploadUserExcel: payload => requests.post("account/upload/userList", payload.file, FILE_HEADER_CONFIG),
}

const agent = {
    Account,
    Users,
    Cars,
    History,
    Tickets,
    Files
};

export default agent;