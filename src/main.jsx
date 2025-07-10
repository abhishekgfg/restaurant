import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // ✅ Import App
import "./i18n";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
