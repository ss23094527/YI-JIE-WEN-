import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './components/SignContent/context/AuthContext'
// import 'bootstrap/dist/css/bootstrap.min.css' 



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>

      <App />
    </React.StrictMode>
  </AuthContextProvider>
)

