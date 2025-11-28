import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AboutMe from './AboutMe.jsx'; 
import UserStatus from './UserStatus.jsx'; 

createRoot(document.getElementById('root')).render(
    <> 
        <App />
        <AboutMe /> 
        <UserStatus />
    </>
);