import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/auth/register'
import Login from './pages/auth/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
