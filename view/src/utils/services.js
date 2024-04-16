import axios from 'axios';

// const url = 'https://tourotank-swuf.vercel.app/api/';
const url = 'http://localhost:8080/api/';


export const auth = (data) => { 
    console.log(data);
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



import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD6w_OryDk93dIgfinmeOhLjisqIJS5HpY",
    authDomain: "tourotank.firebaseapp.com",
    projectId: "tourotank",
    storageBucket: "tourotank.appspot.com",
    messagingSenderId: "891917401405",
    appId: "1:891917401405:web:a6d2eee0328545c6985954",
    measurementId: "G-2PV87X8Y6V"
};

export const app = initializeApp(firebaseConfig);
