import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import TodoProvider from './context/TodoContext';
import TheamProvider from './context/TheamContext';
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <TodoProvider>
            <TheamProvider>
                 <Analytics >
                <App />
                </ Analytics >
            </TheamProvider>
        </TodoProvider>
    </BrowserRouter>

);
