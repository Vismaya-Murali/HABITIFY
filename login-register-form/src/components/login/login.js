import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

    const Login = ({ setLoginUser}) => {

        const navigate = useNavigate()
    
        const [ user, setUser] = useState({
            email:"",
            password:""
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }
    
        const login = () => {
             axios.post("http://localhost:3005/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            });
        };
    

    return (
        <body className='login'>
        <div className="wrapper">
            <form action="">
                <h1>Habitify</h1><br />
                <div className="input-box">
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

            <div className="register-link" onClick={login}>Login</div>
            <div className='or'>or</div><br/>
            <div className="register-link" onClick={() => navigate("/register")}>Register</div>
            </form>
        </div>
        </body>
    );
}

export default Login;