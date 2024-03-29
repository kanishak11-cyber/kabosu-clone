import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,700;0,800;0,900;1,700&display=swap');
</style>
ReactDOM.render(
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
