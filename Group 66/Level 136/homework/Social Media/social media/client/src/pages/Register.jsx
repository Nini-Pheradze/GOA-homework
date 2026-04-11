import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { register } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
        };

        e.target.reset();
        register(data);
    }
    return (
        <section>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </section>
    );
};

export default Register;