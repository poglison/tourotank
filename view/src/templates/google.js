import { useState, createContext, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../services";
import { Navigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

export default function Login() {


    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStorageData = () => {
            const storageUser = sessionStorage.getItem("@AuthFirebase:user");
            const storageToken = sessionStorage.getItem("@AuthFirebase:token");
            if (storageToken && storageUser) {
                setUser(storageUser);
            }
        };
        loadStorageData();
    });

    function signInGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
                console.log("logado com sucesso");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log("erro ao logar")
            });
    }

    function signOut() {
        auth.signOut().then(() => {
            setUser(null);
            sessionStorage.removeItem("@AuthFirebase:token");
            sessionStorage.removeItem("@AuthFirebase:user");
        }).catch((error) => {
            console.log(error);
        });
    }




    async function handleLoginFromGoogle() {
        await signInGoogle();
    }


    return <button className="" onClick={handleLoginFromGoogle}>
        <div className="cursor-pointer border-[1.5px] rounded-lg h-14 w-14 flex items-center justify-center mr-4 hover:bg-neutral-50">
            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
            </svg>
        </div>
    </button>;

};