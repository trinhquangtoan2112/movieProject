import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { store } from './redux/configStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Cấu hình realtime (websocket với signalR)
import * as signalR from '@aspnet/signalr'
import { DOMAIN } from './util/settings/config';
//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
const root = ReactDOM.createRoot(document.getElementById('root'));

connection.start().then(() => {
    root.render(
        <BrowserRouter >
       <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
    );  
 })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
