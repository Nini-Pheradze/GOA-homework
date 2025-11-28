import AboutMe from './AboutMe'; 

function UserStatus() {
    const isLoggedIn = true;

    return (
        <div>
        {isLoggedIn ? (
            <AboutMe />
        ) : (
            <p>You are not logged in to your account</p>
        )}
        </div>
    );
}

export default UserStatus;