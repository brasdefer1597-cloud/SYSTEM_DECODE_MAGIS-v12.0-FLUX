import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

// For now, the demo renders the same App.
// In a real scenario, we might wrap it with a specific Demo context or render a restricted version.
console.log("Running in Demo Mode");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
