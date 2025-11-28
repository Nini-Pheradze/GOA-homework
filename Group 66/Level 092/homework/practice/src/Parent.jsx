import Child from './Child';

function Parent({ handleClick }) {
    return(
    <div>
        <h2>Parent Component</h2>
        <Child handleClick={handleClick} />
    </div>
    );
}

export default Parent;