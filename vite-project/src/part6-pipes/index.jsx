import './../assets/bootstrap.css';
import './../assets/bootstrap.bundle.js';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = document.getElementById('root');
createRoot(root).render(
    <App />
)
