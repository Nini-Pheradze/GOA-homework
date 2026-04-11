const Nav = () => {
    return (
        <header>
            <h1>Social Media</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
        </header>
    )
};

export default Nav;