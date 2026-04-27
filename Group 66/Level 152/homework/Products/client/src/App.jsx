import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;