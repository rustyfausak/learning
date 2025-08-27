import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './../assets/bootstrap.css';
import './../assets/bootstrap.bundle.js';

const root = document.getElementById('root');
createRoot(root).render(
    <App />
)
