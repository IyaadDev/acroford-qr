import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app.jsx';
import "./css/bootstrap.min.css";

function Main() {
    return (
        <App />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);