import { useAuth } from "../context/AuthContext";

const Login = () => {
    const { login } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
        email: e.target.email.value,
        password: e.target.password.value
        };

        e.target.reset();
        login(data);
    }
    return (
        <section>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">LOgin</button>
            </form>
        </section>
    );
};

export default Login;