
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Disable browser's automatic scroll restoration
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Remember scroll position before refreshing
window.addEventListener('pagehide', () => {
  sessionStorage.setItem(
    'atlas-refresh-scroll',
    String(window.scrollY)
  );
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
