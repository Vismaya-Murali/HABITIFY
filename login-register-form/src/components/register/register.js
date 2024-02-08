import React , {useState} from 'react';
import "./register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3005/register",user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <body className='register'>
        <div className="wrapper">
            {console.log("User", user)}
            <form action="">
                <h1>Habitify</h1>
                <div className="input-box">
                    <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter Name" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="input-box">
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-enter your Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="register-link" onClick={register} >Register</div>
            <div className='or'>or</div><br/>
            <div className="register-link" onClick={() => navigate("/login")}>Login</div>
            </form>
        </div>
        </body>
    );
}

export default Register;
