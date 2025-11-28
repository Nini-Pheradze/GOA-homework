function User({ name, age, email }) {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default User