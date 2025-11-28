import GrandChild from "./GrandChild";

export default function Child({ userName }) {
    return (
        <div>
            <h3>Child Component</h3>
            <GrandChild userName={userName} />
        </div>
    );
}