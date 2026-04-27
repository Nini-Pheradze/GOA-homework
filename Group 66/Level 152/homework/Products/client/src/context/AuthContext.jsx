import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
const API_URL = 'http://localhost:3000/api';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const signup = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.message);
            };

            alert(data.message);

            navigate('/login');
        } catch (err) {
            alert(err);
        }
    };

    const login = async (formData) => {
        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.message);
            };

            setUser(data.user);
            alert(data.message);
            navigate('/profile');

        } catch (err) {
            alert(err);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return( 
        <AuthContext.Provider value={{signup, login, user, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;