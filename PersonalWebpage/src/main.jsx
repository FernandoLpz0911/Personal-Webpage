import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import PageRouter from './PageRouter.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
