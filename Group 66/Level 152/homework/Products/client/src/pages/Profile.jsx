import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const { user } = useAuth();

    return (
        <>
            <div>
                <p>User name: {user.name}</p>
                <p>User email: {user.email}</p>
                <p>User role: {user.role}</p>
            </div>
        </>
    );
};

export default Profile;