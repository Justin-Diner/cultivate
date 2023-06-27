import React from 'react';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Root() {
    return (
        <BrowserRouter>
                <App />
        </BrowserRouter>
  
    )
}

const initialLoad = () => {
    root.render(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    )
}

initialLoad();

