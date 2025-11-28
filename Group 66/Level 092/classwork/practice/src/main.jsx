import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Child from './Child.jsx';
import GrandChild from './GrandChild.jsx';
import Parent from './Parent.jsx';

createRoot(document.getElementById('root')).render(<App />);
