import{ createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = 'http://localhost:3000/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async(user) => {
    try {
        const res = await fetch(API_URL + '/auth/signup', {
            method: 'POST',
            headers: {
            'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();

        alert(data.message);
    } catch(err) {
        console.log(err);
    }
    }

    return (
        <AuthContext.Provider value={{register, user}}>
            { children }
        </AuthContext.Provider>
    )
}