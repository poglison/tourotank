import axios from 'axios';
const url = 'http://localhost:8080/api/';



export const login = (data) => {

    return axios.post(url + 'login', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}


export const get = (table) => {
    return axios.get(url + table)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export const getByCode = (table, id) => {
    return axios.get(url + table + '/code/' + id)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

export const save = (table, data) => {
    return axios.post(url + table, data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};