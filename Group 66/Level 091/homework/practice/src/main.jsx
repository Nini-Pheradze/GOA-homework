import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const element = <h3>I am being rendered!</h3>

createRoot(document.getElementById('root')).render(<App />);
ReactDOM.render(element, document.getElementById('root'))