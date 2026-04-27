import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
    const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        signup(formData);

        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" required/>
            <input type="email" name="email" placeholder="Enter Your Email" required/>
            <input type="password" name="password" placeholder="Enter Your Password" required/>

            <button>Submit</button>
        </form>
    );
};
export default Signup;