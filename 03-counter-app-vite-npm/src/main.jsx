import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './HelloWorld';
//import { Variable1 } from './HelloWorld';
import { FirstAppFunc } from './FirstApp';
//import { CounterApp } from './CounterApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     {/*    <FirstAppFunc title="Hello MS" numberC = {123}/> */}
        {/* <CounterApp value={10}/> */}
        <FirstAppFunc/>
    </React.StrictMode>
)