import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />);


// React-ში, როდესაც JSX-ს ვწერთ, class არის საკვანძო სიტყვა JavaScript-ში, ამიტომ HTML-ის class ატრიბუტი პირდაპირ ვერ გამოიყენება JSX-ში.

// ამის ნაცვლად React იყენებს className
