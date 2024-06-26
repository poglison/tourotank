const { initializeApp } = require("firebase/app");

const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');



const firebaseConfig = {
    apiKey: "AIzaSyD6w_OryDk93dIgfinmeOhLjisqIJS5HpY",
    authDomain: "tourotank.firebaseapp.com",
    projectId: "tourotank",
    storageBucket: "tourotank.appspot.com",
    messagingSenderId: "891917401405",
    appId: "1:891917401405:web:a6d2eee0328545c6985954",
    measurementId: "G-2PV87X8Y6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


async function save(table, id, data, body) {

    if (id) {
        const savedData = {
            ...data,
            id: id,
        }
        return savedData;
    } else {
        const referencesEntity = await addDoc(collection(db, table), { ...data });

        const savedData = {
            ...data,
            id: referencesEntity.id,
        }
        return savedData;
    }
}

async function get(table) {

    const tableRef = collection(db, table);

    const q = query(tableRef);
    const querySnapshot = await getDocs(q);
    const list = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        list.push(data);
    });
    return list;
}

async function getID(table, id) {

    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Não funcionou!");
    }
}

async function remove(table, id) {
    const dado = await deleteDoc(doc(db, table, id));
    return {
        message: `${id} deletado`
    }
}

module.exports = {
    save,
    get,
    getID,
    remove
}