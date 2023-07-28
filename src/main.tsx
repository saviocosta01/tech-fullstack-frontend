import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomerProvider>
    <App />
    </CustomerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
