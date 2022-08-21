import React, { useEffect, useState} from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from "gapi-script"

export default function Login(){
    const clientId = "1071803335833-qv6i75sujn39t7athdfa717ucm8vn26i.apps.googleusercontent.com"

  useEffect(()=>{const  clientId= "1071803335833-qv6i75sujn39t7athdfa717ucm8vn26i.apps.googleusercontent.com";
  function start(){
    gapi.client.init({clientId: clientId, scope:"",});}gapi.load("client:auth2",start);
  });
     const [showLoginButton, setShowLoginButton] = useState(true);
     const [showLogoutButton, setShowLogoutButton] = useState(false);
    const onLoginSuccess = (res)=>{
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }
    const onFailureSuccess = (res)=>{
        console.log('Login Failed:', res)
    }
    const onSignoutSuccess = ()=>{
        alert("you have signout successfully");
    }
    return(
        <div>
        {showLoginButton ?
            <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  />:null
        }

{showLogoutButton ?
<GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout>: null
}
        </div>
    )
}