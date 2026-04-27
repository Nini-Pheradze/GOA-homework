import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <header>
        <nav>
            <li><Link to= {'/'}>Home</Link></li>
            {
                !user ? (
                    <>
                        <li><Link to= {'/signup'}>Sign Up</Link></li>
                        <li><Link to= {'/login'}>Log In</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li onClick={logout} to={'/login'}><Link>logout</Link></li>
                    </>
                )
            }
        </nav>
        </header>
    );
};

export default Nav;