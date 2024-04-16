import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './temp/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    {/* <App /> */}
  </React.StrictMode>
);

