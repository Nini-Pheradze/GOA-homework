import Child from './Child';

export default function Parent({userName}) {
    return (
        <div>
            <h2>Parent Component</h2>
            <Child userName={userName}/>
        </div>
    )
}