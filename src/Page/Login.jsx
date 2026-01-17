import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../redux/authSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fromData, setFormData] = useState({
        username: "",
        password: ""
    });

    console.log("fromData",fromData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name",name,value);
        setFormData({
            ...fromData,
            [name]: value
        });
    } 
    
    const handelSubmit = () => {
        console.log("fromData on submit",fromData);
        if(fromData.username === "admin" && fromData.password === "admin"){
            navigate('/dashboard');
            dispatch(LOGIN({ name: "Roshan Sharad Naik", password:"admin",year:2026,course:"BE",
                college:"Coeta",location:"Akola",state:"Maharashtra",country:"India",contact:"+917024567890",email:"roshannaik@gmail.com"
             }));
            // dispatch({type: 'LOGIN', payload: {name: fromData.username,password: fromData.password}});
            alert("Login Successful");
        } else {
            alert("Invalid Credentials");
        }
    }


  return (
    <>
      <input type="text" placeholder='Username' onChange={(e)=>handleChange(e)} name="username"/>
        <input type="password" placeholder='Password' onChange={(e)=>handleChange(e)} name="password" />
        <button onClick={()=>handelSubmit()}>Login</button>
    </>
  )
}

export default Login
