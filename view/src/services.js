import axios from 'axios';

const url = 'https://tankdb.vercel.app/api/';

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



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6w_OryDk93dIgfinmeOhLjisqIJS5HpY",
  authDomain: "https://tourotank.firebaseapp.com",
  projectId: "891917401405-jjrpoleqa1b3bu52gmpe73mhsmmu0dqn.apps.googleusercontent.com",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export const app = initializeApp(firebaseConfig);