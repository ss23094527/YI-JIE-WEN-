import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home'
import About from './pages/About'
import Music from './pages/Music'
import Model from './pages/Model'
import Sign from './pages/Sign';
import Login from './components/SignContent/Login';
import Register from './components/SignContent/Rigister';
import { useContext } from 'react';
import { AuthContext } from './components/SignContent/context/AuthContext';
import User from './pages/User';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {


  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Model" element={<Model />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
