
import "./SignUp.css";
import React, {useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../ContextProvider";




const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });

    console.log(logdata);

    const {account, setAccount} = useContext(LoginContext);

    const adddata = (e) => {
        const { name, value } = e.target;
         console.log(name, value);

        setData(() => {
            return {
                ...logdata,
                [name]:value
            }
        })
    };

    

const senddata = async(e)=>{
    e.preventDefault();

        const { email, password } = logdata;
        // console.log(email);

    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
        email,password
        })
    });

    //inside senddata
    const data = await res.json();
    console.log(data);

    if(res.status === 400 || !data){
        // console.log("INVALID DETAILS");
        toast.error("Invalid Details 👎!", {
            position: "top-center"
        });
    }
else{
    // console.log("valid data");
    setAccount(data)
    setData({...logdata,email:"",password:""});
    toast.success("Login Successfully done 😃!", {
        position: "top-center"
    });
}
    
} 


           
          
    return (
        <>
<section>
            <div className="sign_container">
                <div className='sign_header'>
                    <img src='./blacklogoamazon.png' alt='AMZON LOGO'/>
                </div>
                <div className='sign_form'>
                    <form method="POST">
                        <h1>Sign-In</h1>
                        {/* Email */}
                        <div className='form_data'>
                        <label htmlFor="email">Email</label>
                            <input type="email" name="email" 
                            onChange={adddata}
                            value={logdata.email}
                            id="email" />
                        </div>
                        {/* Password */}
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" 
                            onChange={adddata}
                            value={logdata.password}
                            id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata} ><NavLink to="/">Continue</NavLink></button>

                    </form>
                    <ToastContainer />
                </div>
<div className='create_accountinfo'>
    <p>New to Amazon</p>
    <NavLink to='/register'><button type="submit" className="signin_btn" >Create your amazon account</button></NavLink>
</div>
          
            </div>

        </section>
        </>
        
    )
}

export default Sign_in





