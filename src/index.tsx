import React from 'react';
import './index.css';
// import reportWebVitals from './reportWebVitals';reportWebVitals
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import redux_store from "./redux/redux_store";
import App from "./App"

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={redux_store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
