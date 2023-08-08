import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'swiper/css';
import 'swiper/css/pagination';

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

