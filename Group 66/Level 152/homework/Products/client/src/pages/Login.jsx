import { useState } from "react";
import { useAuth } from "../context/AuthContext"; 

const Login = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        login(formData);

        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter Your Email" required/>
            <input type="password" name="password" placeholder="Enter Your Password" required/>

            <button>Submit</button>
        </form>
    );
};


export default Login;