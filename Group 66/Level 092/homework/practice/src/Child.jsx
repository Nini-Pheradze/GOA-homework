function Child({ handleClick }) {
    return (
    <div>
        <h3>Child Component</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
    );
}

export default Child;