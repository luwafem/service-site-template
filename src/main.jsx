import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { clientConfig } from './config/clientConfig'
import './index.css'

// Apply dynamic colors
const root = document.documentElement;
root.style.setProperty('--color-primary', clientConfig.colors.primary);
root.style.setProperty('--color-secondary', clientConfig.colors.secondary);
root.style.setProperty('--color-accent', clientConfig.colors.accent);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)