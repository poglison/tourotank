import axios from 'axios';
// const url = 'http://localhost:8080/api/';

const url = 'https://tankdb.vercel.app/';

export const auth = (data) => {

    return axios.post(url + 'user/auth', data)
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

export const getByID = (table, id) => {

    return axios.get(url + table + '/' + id)
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