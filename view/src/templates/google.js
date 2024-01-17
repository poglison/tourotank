import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';


export default function Google() {

    return (

        <GoogleOAuthProvider clientId="891917401405-jjrpoleqa1b3bu52gmpe73mhsmmu0dqn.apps.googleusercontent.com">
            <Login />
        </GoogleOAuthProvider>
    )
}


function Login() {


    const auth = useGoogleLogin({
        onSuccess: tokenResponse => console.log("tokenResponse"),
        onError: error => console.log("error"),
    });


    return (
        <div className=' bg-primary cursor-pointer' onClick={() => auth()} >
            <GoogleLogin onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
                onError={() => {
                    console.log('Login Failed');
                }}>
            </GoogleLogin>
        </div>
    )

}