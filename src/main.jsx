import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { UserProvider } from './context/user';

ReactDOM.createRoot(document.getElementById('root')).render(
  // changed from <Router>
  // <React.StrictMode>
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>

  // </React.StrictMode>
);
