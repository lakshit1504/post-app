import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import img from "../../assets/home-pichome.png"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    const login= async ()=>{
        if(email==="foundersoffice@enitiate.gg" && password==="ABC@abc123"){
            let result=await fetch(" https://dev.enitiate.gg/api/v1/user/auth/login",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"email": "foundersoffice@enitiate.gg",
               "password": "ABC@abc123"})
            })
            let response=await result.json();
            if(response.successful){
                localStorage.setItem("token",response.data.idToken);
                navigate("/");
            }
        }
        else{
            toast("check email and password!")
            
        }
    }
  return (
    <div className="login">
        <div className="pic">
            <img src={img} alt="home pic" />
        </div>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        <div className="logins">
                <h2>Login to your account</h2>
                <input className='bg1' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" id="email" name="email"/> 
                <input className='bg2' type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password" id="password" name="password"/> 
                <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login